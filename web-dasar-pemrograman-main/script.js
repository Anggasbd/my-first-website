console.log("Javascript berhasil digunakan")

const aboutme = {
	nama: ": Mhd. Angga Sabda",
	email: ": fingerstyleaga@gmail.com",
	nomor: ": +6282368310738",
	alamat: ": Jl. PWS Gg. Buntu II No. 32 G Medan"
}

const table = document.querySelector
	('table');

const row1 = document.createElement('tr');
row1.innerHTML = '<td>' + "Nama" + '</td>';
row1.innerHTML += '<td>' + aboutme.nama + '</td>';

const row2 = document.createElement('tr');
row2.innerHTML = '<td>' + "Email" + '</td>';
row2.innerHTML += '<td>' + aboutme.email + '</td>';

const row3 = document.createElement('tr');
row3.innerHTML = '<td>' + "Nomor Handphone" + '</td>';
row3.innerHTML += '<td>' + aboutme.nomor + '</td>';

const row4 = document.createElement('tr');
row4.innerHTML = '<td>' + "Alamat" + '</td>';
row4.innerHTML += '<td>' + aboutme.alamat + '</td>';


table.appendChild(row1)
table.appendChild(row2)
table.appendChild(row3)
table.appendChild(row4)