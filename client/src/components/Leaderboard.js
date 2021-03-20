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
         
        }
      })
      .catch((err) => {
        console.log(err);
      });
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
		<div className="overflow-x-auto" style={{ minHeight: "91vh" }}>
			<div className=" flex items-center justify-center bg-gray-100 font-sans overflow-hidden">
				<div className="w-full lg:w-5/6 flex-col justify-center">
					<div className="flex justify-center p-5">
						<img className="h-28 w-28" src={winner} alt="trophy"></img>
					</div>
					<div className="bg-white shadow-md rounded my-6">
						<table className="min-w-max w-full table-auto">
							<thead>
								<tr className="bg-gray-200 text-gray-600 uppercase text-sm leading-normal">
									<th className="py-3 px-6 text-left">User</th>

									<th className="py-3 px-6 text-center">Level</th>
									<th className="py-3 px-6 text-center">Tier</th>
								</tr>
							</thead>

							<tbody className="text-gray-600 text-sm font-light">
								{!check && (
									<>
										<tr className="border-b border-gray-200 hover:bg-gray-100 animate-pulse">
											<td className="py-3 px-6 text-left">
												<div className="flex items-center">
													<div className="mr-2">
														<div className="w-36 h-6 rounded-full bg-gray-400" />
													</div>
												</div>
											</td>
											<td className="py-3 px-6 text-center font-medium ">
												<div className="w-10 h-6 rounded-full bg-gray-400" />
											</td>
											<td className="py-3 px-6 text-center font-medium flex  justify-center">
												<div className="w-16 h-6 rounded-full bg-gray-400" />
											</td>
										</tr>
										<tr className="border-b border-gray-200 hover:bg-gray-100 animate-pulse">
											<td className="py-3 px-6 text-left">
												<div className="flex items-center">
													<div className="mr-2">
														<div className="w-36 h-6 rounded-full bg-gray-400" />
													</div>
												</div>
											</td>
											<td className="py-3 px-6 text-center font-medium ">
												<div className="w-10 h-6 rounded-full bg-gray-400" />
											</td>
											<td className="py-3 px-6 text-center font-medium flex  justify-center">
												<div className="w-16 h-6 rounded-full bg-gray-400" />
											</td>
										</tr>
										<tr className="border-b border-gray-200 hover:bg-gray-100 animate-pulse">
											<td className="py-3 px-6 text-left">
												<div className="flex items-center">
													<div className="mr-2">
														<div className="w-36 h-6 rounded-full bg-gray-400" />
													</div>
												</div>
											</td>
											<td className="py-3 px-6 text-center font-medium ">
												<div className="w-10 h-6 rounded-full bg-gray-400" />
											</td>
											<td className="py-3 px-6 text-center font-medium flex  justify-center">
												<div className="w-16 h-6 rounded-full bg-gray-400" />
											</td>
										</tr>
									</>
								)}
								{arr.map((obj,ind) => {
									return (
										<tr className="border-b border-gray-200 hover:bg-gray-100" key={ind}>
											<td className="py-3 px-6 text-left">
												<div className="flex items-center">
													<div className="mr-2">
														<img
															className="w-6 h-6 rounded-full"
															src={obj.imageUrl}
															alt="user"
														/>
													</div>
													<span>{obj.username}</span>
												</div>
											</td>

											<td className="py-3 px-6 text-center font-medium">
												{obj.level-1}
											</td>
											{obj.level >= 10 && (
												<td className="py-3 px-6 text-center">
													<span className="bg-green-200 text-green-600 py-1 px-3 rounded-full text-xs">
														Master
													</span>
												</td>
											)}
											{obj.level >= 7 && obj.level <= 9 && (
												<td className="py-3 px-6 text-center">
													<span className="bg-purple-200 text-purple-600 py-1 px-3 rounded-full text-xs">
														Champion
													</span>
												</td>
											)}
											{obj.level >= 3 && obj.level <= 6 && (
												<td className="py-3 px-6 text-center">
													<span className="bg-yellow-200 text-yellow-600 py-1 px-3 rounded-full text-xs">
														Specialist
													</span>
												</td>
											)}
											{obj.level < 3 && (
												<td className="py-3 px-6 text-center">
													<span className="bg-red-200 text-red-600 py-1 px-3 rounded-full text-xs">
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
