let EmptyTask = () => {
	let favdialog = document.getElementById("dial");
	try {
        favdialog.showModal();
    } catch (error) {
        alert("cannot add empty field");
    }
	let closeDiaog = document.getElementById("close");
	closeDiaog.addEventListener("click", () => {
		favdialog.close();
	});
};
export { EmptyTask };
