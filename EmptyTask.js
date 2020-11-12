let EmptyTask = () => {
	let favdialog = document.getElementById("dial");
	try {
        favdialog.showModal();// implemented in opera and chrome browsers
    } catch (error) {
        alert("cannot add empty task");//.... used because showModal does not work in firefox
	}
	//this function only applies in the custom dialogs created i.e in chrome and opera
	let closeDiaog = document.getElementById("close");
	closeDiaog.addEventListener("click", () => {
		favdialog.close();
	});
};
export { EmptyTask };
