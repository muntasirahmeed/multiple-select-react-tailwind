import React, {useState} from "react";
import Dropdown from "./Dropdown";
import angle from "./image/angle.svg";
import close from "./image/close.svg";

const Multiselect = () => {
	// state showing if dropdown is open or closed
	const [dropdown, setDropdown] = useState(false);
	// managing dropdown items (list of dropdown items)
	const items = ["john", "milos", "steph", "kathreine"];
	const items2 = [
		{id: 1, label: "Categories Name", value: "", options: ["First john", "Second milos", "Third steph", "Fourth kathreine"]},
		{id: 1, label: "Categories Name", value: "", options: ["fifth john", "sixth milos", "seventh steph", "eighth kathreine"]},
	];
	// contains selected items
	const [selectedItems, setSelected] = useState([]);
	const toggleDropdown = () => {
		setDropdown(!dropdown);
	};
	// adds new item to multiselect
	const addTag = (item) => {
		setSelected(selectedItems.concat(item));
		setDropdown(false);
	};
	// removes item from multiselect
	const removeTag = (item) => {
		const filtered = selectedItems.filter((e) => e !== item);
		setSelected(filtered);
	};
	return (
		<>
			<div className="container relative mx-auto">
				<div className="w-full flex flex-col items-center mx-auto">
					<div className="w-full">
						<div className="flex flex-col items-center relative">
							<div className="w-full ">
								<div className="my-2 p-1 flex border border-gray-200 bg-white rounded ">
									<div className="flex flex-auto flex-wrap">
										{selectedItems.map((tag, index) => {
											return (
												<div
													key={index}
													className="flex justify-center items-center m-1 font-medium py-1 px-2  rounded-full text-teal-700 bg-teal-100 border border-teal-300 "
												>
													<div className="text-xs font-normal leading-none max-w-full flex-initial">{tag}</div>
													<div className="flex flex-auto flex-row-reverse">
														<div onClick={() => removeTag(tag)}>
															<img className="h-3.5 ml-2 cursor-pointer" src={close} alt="" />
														</div>
													</div>
												</div>
											);
										})}
										<div className="flex-1">
											<input
												placeholder={"Please pick a options"}
												className="bg-transparent placeholder:text-sm p-1 px-2 appearance-none outline-none h-full w-full text-gray-800"
											/>
										</div>
									</div>
									<div
										className="text-gray-300 w-8 py-1 pl-2 pr-1 border-l flex items-center border-gray-200"
										onClick={toggleDropdown}
									>
										<button className="cursor-pointer w-6 h-6 text-gray-600 outline-none focus:outline-none">
											<img className="w-5" src={angle} alt="" />
										</button>
									</div>
								</div>
							</div>
						</div>
						{dropdown ? <Dropdown list2={items2} list={items} addItem={addTag}></Dropdown> : null}
					</div>
				</div>
			</div>
		</>
	);
};

export default Multiselect;
