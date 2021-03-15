import axios from 'axios';
import { baseUrl } from '../shared/baseUrl';
import { useEffect, useState } from 'react';
import winner from '../images/winner.png';

function LeaderBoard() {
  let [arr, setarr] = useState([]);
  let [check, setcheck] = useState(false);

  useEffect(() => {
    axios
      .get(baseUrl + 'leaderboard')
      .then((response) => {
        var newarr = response.data[0];
        setarr(newarr);
        if (arr.length === 0) {
          setcheck(true);
        } else {
          arr.sort((a, b) => {
            var l1 = a.level;
            var l2 = b.level;
            return l2 - l1;
          });
          console.log('here');
          console.log(arr);
        }
      })
      .catch((err) => {
        console.log(err);
      });
  }, [check]);

  return (
    <div class='overflow-x-auto'>
      <div class='min-w-screen min-h-screen flex items-center justify-center bg-gray-100 font-sans overflow-hidden'>
        <div class='w-full lg:w-5/6 flex-col justify-center'>
          <div class='flex justify-center p-5'>
            <img class='h-48 w-48' src={winner}></img>
          </div>
          <div class='bg-white shadow-md rounded my-6'>
            <table class='min-w-max w-full table-auto'>
              <thead>
                <tr class='bg-gray-200 text-gray-600 uppercase text-sm leading-normal'>
                  <th class='py-3 px-6 text-left'>User</th>

                  <th class='py-3 px-6 text-center'>Level</th>
                  <th class='py-3 px-6 text-center'>Tier</th>
                </tr>
              </thead>

              <tbody class='text-gray-600 text-sm font-light'>
                {arr.map((obj) => {
                  return (
                    <tr class='border-b border-gray-200 hover:bg-gray-100'>
                      <td class='py-3 px-6 text-left'>
                        <div class='flex items-center'>
                          <div class='mr-2'>
                            <img
                              class='w-6 h-6 rounded-full'
                              src={obj.imageUrl}
                            />
                          </div>
                          <span>{obj.username}</span>
                        </div>
                      </td>

                      <td class='py-3 px-6 text-center font-medium'>
                        {obj.level}
                      </td>
                      {obj.level >= 10 && (
                        <td class='py-3 px-6 text-center'>
                          <span class='bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs'>
                            Master
                          </span>
                        </td>
                      )}
                      {obj.level >= 7 && obj.level <= 9 && (
                        <td class='py-3 px-6 text-center'>
                          <span class='bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs'>
                            Champion
                          </span>
                        </td>
                      )}
                      {obj.level >= 3 && obj.level <= 6 && (
                        <td class='py-3 px-6 text-center'>
                          <span class='bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs'>
                            Specialist
                          </span>
                        </td>
                      )}
                      {obj.level < 3 && (
                        <td class='py-3 px-6 text-center'>
                          <span class='bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs'>
                            Newbie
                          </span>
                        </td>
                      )}
                    </tr>
                  );
                })}
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaderBoard;
