import { notification } from "antd";

const openNotification = ({ title, description, icon, placement }) => {
	notification.open({
		message: props.title,
		description: props.description,
		icon: props.icon,
		placement: placement,
	});
};
