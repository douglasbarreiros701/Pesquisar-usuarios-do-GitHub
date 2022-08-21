
var lastRepos, nomeDaConta, userDoesntExist, repoCount, avatar;
onload = () => {
	lastRepos = document.getElementById("lastRepos");
	nomeDaConta = document.getElementById("nomeDaConta");
	userDoesntExist = document.getElementById("userDoesntExist");
	repoCount = document.getElementById("repoCount");
	avatar = document.getElementById("avatar");
}
async function getApiGitHub() {
	// Get the user
	const res = await fetch(`https://api.github.com/users/${nomeDaConta.value}/repos`);
	var data = await res.json();
	if (data.message == "Not Found") {
		// User Not Found
		userDoesntExist.style.display = "block";
		return;
	}
	userDoesntExist.style.display = "none";
	data.sort((a, b) => new Date(a.created_at.replace("T", " ").replace("Z", "")).getTime() > new Date(b.created_at.replace("T", " ").replace("Z", "")).getTime());
	repoCount.innerText = data.length;
	data = data.slice(0, 4);
	lastRepos.innerHTML = null;
	data.forEach(repo => {
		const li = document.createElement("li");
		li.innerHTML = `<a href="${repo.html_url}">${repo.name}</a>`;
		lastRepos.appendChild(li);
	});
	avatar.src = data[0].owner.avatar_url;
}

