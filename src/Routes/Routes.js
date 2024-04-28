import React from "react";
import { Route } from "react-router-dom";
import { Redirect } from "react-router-dom";
import { Switch } from "react-router-dom";
import { BrowserRouter as Router } from "react-router-dom";
import { Provider } from "../Context/Context";
import DashboardLayout from "../Layout/DashboardLayout";
import LandingLayout from "../Layout/LandingLayout";
import Dashboard from "../Pages/Dashboard";
import Home from "../Pages/Home";
import JobDisplay from "../Pages/job-display";
import JobForm from "../Pages/Job-Form";
import JobList from "../Pages/job-list";
import Login from "../Auth/Login";
import Profile from "../Pages/Profile";
import Cookies from "js-cookie";
import Register from "../Auth/Register";
import ChangePassword from "../Auth/ChangePassword";
import JobDisplayMore from "../Pages/job-display-more";
import JobDisplayDetails from "../Pages/job-display-details";

const Routes = () => {
	const LoginRoute = ({ ...props }) => {
		if (Cookies.get("token") === undefined) {
			return <Route {...props} />;
		} else if (Cookies.get("token") !== undefined) {
			return <Redirect to={"/"} />;
		}
	};

	const DashboardRoute = ({ ...props }) => {
		if (Cookies.get("token") === undefined) {
			return <Redirect to={"/login"} />;
		} else if (Cookies.get("token") !== undefined) {
			return <Route {...props} />;
		}
	};

	return (
		<Router>
			<Provider>
				<Switch>
					<Route path="/" exact>
						<LandingLayout>
							<Home />
							<JobDisplay />
						</LandingLayout>
					</Route>

					<Route path="/job-vacant" exact>
						<LandingLayout>
							<JobDisplayMore />
						</LandingLayout>
					</Route>

					<Route path="/job-vacant/details/:id" exact>
						<LandingLayout>
							<JobDisplayDetails />
						</LandingLayout>
					</Route>

					<LoginRoute path="/login" exact>
						<Login />
					</LoginRoute>

					<LoginRoute path="/register" exact>
						<Register />
					</LoginRoute>

					<DashboardRoute path="/dashboard" exact>
						<DashboardLayout>
							<Dashboard />
						</DashboardLayout>
					</DashboardRoute>

					<DashboardRoute path="/dashboard/list-job-vacancy" exact>
						<DashboardLayout>
							<JobList />
						</DashboardLayout>
					</DashboardRoute>

					<DashboardRoute path="/dashboard/list-job-vacancy/form" exact>
						<DashboardLayout>
							<JobForm />
						</DashboardLayout>
					</DashboardRoute>

					<DashboardRoute path="/dashboard/list-job-vacancy/form/edit/:Id" exact>
						<DashboardLayout>
							<JobForm />
						</DashboardLayout>
					</DashboardRoute>

					<DashboardRoute path="/dashboard/profile" exact>
						<DashboardLayout>
							<Profile />
						</DashboardLayout>
					</DashboardRoute>

					<DashboardRoute path="/dashboard/change-password" exact>
						<DashboardLayout>
							<ChangePassword />
						</DashboardLayout>
					</DashboardRoute>
				</Switch>
			</Provider>
		</Router>
	);
};

export default Routes;
