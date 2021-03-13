import axios from 'axios';
import { baseUrl } from '../shared/baseUrl';
import { useEffect, useState } from 'react';

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
        <div class='w-full lg:w-5/6'>
          <div class='bg-white shadow-md rounded my-6'>
            <table class='min-w-max w-full table-auto'>
              <thead>
                <tr class='bg-gray-200 text-gray-600 uppercase text-sm leading-normal'>
                  <th class='py-3 px-6 text-left'>User</th>
                  <th class='py-3 px-6 text-center'>Users</th>
                  <th class='py-3 px-6 text-center'>Status</th>
                </tr>
              </thead>
              <tbody class='text-gray-600 text-sm font-light'>
                <tr class='border-b border-gray-200 hover:bg-gray-100'>
                  <td class='py-3 px-6 text-left'>
                    <div class='flex items-center'>
                      <div class='mr-2'>
                        <img
                          class='w-6 h-6 rounded-full'
                          src='https://randomuser.me/api/portraits/men/1.jpg'
                        />
                      </div>
                      <span>Eshal Rosas</span>
                    </div>
                  </td>
                  <td class='py-3 px-6 text-center'>
                    <div class='flex items-center justify-center'>
                      <img
                        class='w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125'
                        src='https://randomuser.me/api/portraits/men/1.jpg'
                      />
                      <img
                        class='w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125'
                        src='https://randomuser.me/api/portraits/women/2.jpg'
                      />
                      <img
                        class='w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125'
                        src='https://randomuser.me/api/portraits/men/3.jpg'
                      />
                    </div>
                  </td>
                  <td class='py-3 px-6 text-center'>
                    <span class='bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs'>
                      Active
                    </span>
                  </td>
                </tr>
                <tr class='border-b border-gray-200 bg-gray-50 hover:bg-gray-100'>
                  <td class='py-3 px-6 text-left'>
                    <div class='flex items-center'>
                      <div class='mr-2'>
                        <img
                          class='w-6 h-6 rounded-full'
                          src='https://randomuser.me/api/portraits/women/2.jpg'
                        />
                      </div>
                      <span>Anita Rodriquez</span>
                    </div>
                  </td>
                  <td class='py-3 px-6 text-center'>
                    <div class='flex items-center justify-center'>
                      <img
                        class='w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125'
                        src='https://randomuser.me/api/portraits/men/1.jpg'
                      />
                      <img
                        class='w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125'
                        src='https://randomuser.me/api/portraits/women/2.jpg'
                      />
                      <img
                        class='w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125'
                        src='https://randomuser.me/api/portraits/men/3.jpg'
                      />
                    </div>
                  </td>
                  <td class='py-3 px-6 text-center'>
                    <span class='bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs'>
                      Completed
                    </span>
                  </td>
                </tr>
                <tr class='border-b border-gray-200 hover:bg-gray-100'>
                  <td class='py-3 px-6 text-left'>
                    <div class='flex items-center'>
                      <div class='mr-2'>
                        <img
                          class='w-6 h-6 rounded-full'
                          src='https://randomuser.me/api/portraits/men/3.jpg'
                        />
                      </div>
                      <span>Taylan Bush</span>
                    </div>
                  </td>
                  <td class='py-3 px-6 text-center'>
                    <div class='flex items-center justify-center'>
                      <img
                        class='w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125'
                        src='https://randomuser.me/api/portraits/men/1.jpg'
                      />
                      <img
                        class='w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125'
                        src='https://randomuser.me/api/portraits/women/2.jpg'
                      />
                      <img
                        class='w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125'
                        src='https://randomuser.me/api/portraits/men/3.jpg'
                      />
                    </div>
                  </td>
                  <td class='py-3 px-6 text-center'>
                    <span class='bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs'>
                      Scheduled
                    </span>
                  </td>
                </tr>
                <tr class='border-b border-gray-200 bg-gray-50 hover:bg-gray-100'>
                  <td class='py-3 px-6 text-left'>
                    <div class='flex items-center'>
                      <div class='mr-2'>
                        <img
                          class='w-6 h-6 rounded-full'
                          src='https://randomuser.me/api/portraits/men/4.jpg'
                        />
                      </div>
                      <span>Tarik Novak</span>
                    </div>
                  </td>
                  <td class='py-3 px-6 text-center'>
                    <div class='flex items-center justify-center'>
                      <img
                        class='w-6 h-6 rounded-full border-gray-200 border transform hover:scale-125'
                        src='https://randomuser.me/api/portraits/men/1.jpg'
                      />
                      <img
                        class='w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125'
                        src='https://randomuser.me/api/portraits/women/2.jpg'
                      />
                      <img
                        class='w-6 h-6 rounded-full border-gray-200 border -m-1 transform hover:scale-125'
                        src='https://randomuser.me/api/portraits/men/3.jpg'
                      />
                    </div>
                  </td>
                  <td class='py-3 px-6 text-center'>
                    <span class='bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs'>
                      Pending
                    </span>
                  </td>
                </tr>
              </tbody>
            </table>
          </div>
        </div>
      </div>
    </div>
  );
}

export default LeaderBoard;
