import axios from "axios";
import React, { createContext, useState } from "react";
import Cookies from "js-cookie";
import { useHistory } from "react-router-dom";

export const Context = createContext();

export const Provider = (props) => {
	const [sidebarDisplay, setSidebarDisplay] = useState("-translate-x-full");
	const [burgerMenu, setBurgerMenu] = useState("hidden");
	const [profileDisplay, setProfileDisplay] = useState("hidden");
	const [data, setData] = useState([]);
	const [fetchStatus, setFetchStatus] = useState(true);
	const [currentId, setCurrentId] = useState(null);
	const [input, setInput] = useState({
		title: "",
		job_description: "",
		job_qualification: "",
		job_type: "",
		job_tenure: "",
		job_status: "",
		job_status_0: "",
		job_status_1: "",
		company_name: "",
		company_image_url: "",
		company_city: "",
		salary_min: 0,
		salary_max: 0,
	});
	const [inputLogin, setInputLogin] = useState({
		email: "",
		password: "",
	});
	const [inputRegister, setInputRegister] = useState({
		name: "",
		image_url: "",
		email: "",
		password: "",
	});
	const [inputChangePass, setInputChangePass] = useState({
		current_password: "",
		new_password: "",
		new_confirm_password: "",
	});

	let history = useHistory();

	const [search, setSearch] = useState("");
	const [filterIn, setFilter] = useState({
		job_type: "",
		company_name: "",
		company_city: "",
	});

	const handleChangeSearch = (e) => {
		setSearch(e.target.value);
	};

	const handleChangeFilter = (e) => {
		let value = e.target.value;
		let name = e.target.name;
		setFilter({ ...filterIn, [name]: value });
	};

	const handleSearch = (e) => {
		e.preventDefault();
		axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy`).then((res) => {
			let fetchResult = res.data.data;
			console.log(fetchResult);

			let result = fetchResult.filter((res) => {
				return Object.values(res).join("").toLowerCase().includes(search.toLowerCase());
			});

			// console.log(result);

			setData([...result]);
			setSearch("");
		});
	};

	const handleFilter = (e) => {
		e.preventDefault();
		axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy`).then(({ data }) => {
			let fetchResult = data.data;
			console.log(fetchResult);

			console.log(filterIn);

			let result = fetchResult.filter((res) => {
				return (
					res.job_type?.toLowerCase() === filterIn.job_type?.toLowerCase() ||
					res.company_city?.toLowerCase() === filterIn.company_city?.toLowerCase() ||
					res.company_name?.toLowerCase() === filterIn.company_name?.toLowerCase()
				);
			});

			console.log([...result]);

			setData([...result]);
			setFilter({ job_type: "", company_name: "", company_city: "" });
		});
	};

	const fetchData = async () => {
		let result = await axios.get(`https://dev-example.sanbercloud.com/api/job-vacancy`);
		let fetchResult = result.data.data;

		setData(
			fetchResult.map((item) => {
				return {
					id: item.id,
					title: item.title,
					job_description: item.job_description,
					job_qualification: item.job_qualification,
					job_type: item.job_type,
					job_tenure: item.job_tenure,
					job_status: item.job_status,
					company_name: item.company_name,
					company_image_url: item.company_image_url,
					company_city: item.company_city,
					salary_min: item.salary_min,
					salary_max: item.salary_max,
				};
			})
		);
	};

	const functionSubmit = () => {
		axios
			.post(
				`https://dev-example.sanbercloud.com/api/job-vacancy`,
				{
					title: input.title,
					job_description: input.job_description,
					job_qualification: input.job_qualification,
					job_type: input.job_type,
					job_tenure: input.job_tenure,
					job_status: input.job_status,
					company_name: input.company_name,
					company_image_url: input.company_image_url,
					company_city: input.company_city,
					salary_min: input.salary_min,
					salary_max: input.salary_max,
				},
				{ headers: { Authorization: "Bearer " + Cookies.get("token") } }
			)
			.then((res) => {
				console.log(res);
				setFetchStatus(true);
				history.push("/dashboard/list-job-vacancy");
			})
			.catch((e) => {
				console.log(e.response.data.status);
				alert(e.response.data.status);
			});
	};

	const functionUpdate = () => {
		axios
			.put(
				`https://dev-example.sanbercloud.com/api/job-vacancy/${currentId}`,
				{
					title: input.title,
					job_description: input.job_description,
					job_qualification: input.job_qualification,
					job_type: input.job_type,
					job_tenure: input.job_tenure,
					job_status: input.job_status,
					company_name: input.company_name,
					company_image_url: input.company_image_url,
					company_city: input.company_city,
					salary_min: input.salary_min,
					salary_max: input.salary_max,
				},
				{ headers: { Authorization: "Bearer " + Cookies.get("token") } }
			)
			.then((e) => {
				setFetchStatus(true);
				history.push("/dashboard/list-job-vacancy");
			});
	};

	const burgerMenuDisplay = () => {
		if (burgerMenu === "hidden") {
			setBurgerMenu("");
		} else {
			setBurgerMenu("hidden");
		}
	};

	const sidebarMenu = () => {
		if (sidebarDisplay === "-translate-x-full") {
			setSidebarDisplay("");
		} else {
			setSidebarDisplay("-translate-x-full");
		}
	};

	const handleStatus = (status) => {
		if (status === 1) {
			return "Open";
		} else {
			return "Closed";
		}
	};

	const handleText = (text, max) => {
		if (text === null) {
			return "";
		} else {
			return text.slice(0, max) + "...";
		}
	};

	const handleChange = (e) => {
		let value = e.target.value;
		let name = e.target.name;

		if (name === "job_status_1") {
			setInput({ ...input, job_status_1: true, job_status_0: false, job_status: "1" });
		} else if (name === "job_status_0") {
			setInput({ ...input, job_status_0: true, job_status_1: false, job_status: "0" });
		} else {
			setInput({ ...input, [name]: value });
		}
	};

	const functionDelete = (id) => {
		axios
			.delete(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`, {
				headers: { Authorization: "Bearer " + Cookies.get("token") },
			})
			.then(() => {
				setFetchStatus(true);
			})
			.catch((e) => {
				console.log(e);
			});
	};

	const functionEdit = (id) => {
		axios
			.get(`https://dev-example.sanbercloud.com/api/job-vacancy/${id}`)
			.then((result) => {
				let fetchResult = result.data;
				setInput({
					title: fetchResult.title,
					job_description: fetchResult.job_description,
					job_qualification: fetchResult.job_qualification,
					job_type: fetchResult.job_type,
					job_tenure: fetchResult.job_tenure,
					job_status: fetchResult.job_status,
					company_name: fetchResult.company_name,
					company_image_url: fetchResult.company_image_url,
					company_city: fetchResult.company_city,
					salary_min: fetchResult.salary_min,
					salary_max: fetchResult.salary_max,
				});
				setCurrentId(fetchResult.id);
			})
			.catch((error) => {
				console.log(error);
			});
	};

	const functionLogin = () => {
		let { email, password } = inputLogin;

		axios
			.post(`https://dev-example.sanbercloud.com/api/login`, { email, password })
			.then((res) => {
				let { data } = res;
				console.log(data);

				Cookies.set("token", data.token, { expires: 1 });
				Cookies.set("name", data.user.name, { expires: 1 });
				Cookies.set("email", data.user.email, { expires: 1 });
				Cookies.set("image_url", data.user.image_url, { expires: 1 });

				setInputLogin({
					email: "",
					password: "",
				});

				history.push("/dashboard");
			})
			.catch((error) => {
				console.log(error.response.data.error);
				alert(error.response.data.error);
			});
	};

	const functionChangePass = () => {
		let { current_password, new_password, new_confirm_password } = inputChangePass;

		axios
			.post(
				`https://dev-example.sanbercloud.com/api/change-password`,
				{ current_password, new_password, new_confirm_password },
				{ headers: { Authorization: "Bearer " + Cookies.get("token") } }
			)
			.then((e) => {
				console.log(e);
			})
			.catch((e) => {
				console.log(e.response);
				alert(e.response.status);
			});

		setInputChangePass({
			current_password: "",
			new_password: "",
			new_confirm_password: "",
		});
	};

	const profileMenu = () => {
		if (profileDisplay === "hidden") {
			setProfileDisplay("block");
		} else {
			setProfileDisplay("hidden");
		}
	};

	const functions = {
		sidebarMenu,
		burgerMenuDisplay,
		fetchData,
		handleStatus,
		handleText,
		handleChange,
		functionSubmit,
		functionDelete,
		functionEdit,
		functionUpdate,
		functionLogin,
		functionChangePass,
		profileMenu,
		handleChange,
		handleSearch,
		handleFilter,
		handleChangeFilter,
		handleChangeSearch,
	};

	return (
		<Context.Provider
			value={{
				sidebarDisplay,
				setSidebarDisplay,
				burgerMenu,
				setBurgerMenu,
				data,
				setData,
				input,
				setInput,
				inputLogin,
				setInputLogin,
				inputRegister,
				setInputRegister,
				inputChangePass,
				setInputChangePass,
				fetchStatus,
				setFetchStatus,
				currentId,
				setCurrentId,
				profileDisplay,
				setProfileDisplay,
				search,
				setSearch,
				filterIn,
				setFilter,
				functions,
			}}
		>
			{props.children}
		</Context.Provider>
	);
};
