const Dropdown = ({list, addItem, list2}) => {
	return (
		<div id="dropdown" className="absolute right-0 shadow top-100 bg-white z-40 w-full left-0 rounded max-h-select overflow-y-auto ">
			<div className="flex flex-col w-full gap-2 p-3">
				{list2.map((item, key) => {
					return (
						<div key={key} className="">
							<div className="">
								<h2 className="text-sm font-medium ">{item.label}</h2>
								<ul className="pl-2 divide-y divide-gray-200">
									{item.options.map((link, index) => (
										<li
											key={index}
											onClick={() => addItem(link)}
											className="text-gray-600 cursor-pointer p-1 text-sm capitalize   w-full border-gray-100  hover:bg-teal-100"
										>
											{link}
										</li>
									))}
								</ul>
							</div>
						</div>
					);
				})}
			</div>
		</div>
	);
};

export default Dropdown;
