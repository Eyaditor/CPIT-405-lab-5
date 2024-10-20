const players = [
    {   name: "Joel Embiid", 
        team: "PHI", 
        points: 33, 
        rebounds: 10.8, 
        assists: 5.7 
    },
    {   
        name: "Jalen Brunson",
        team: "NYK",
        points: 32.4, 
        rebounds: 3.3, 
        assists: 7.5 
    },
    {   
        name: "Shai Gilgeous-Alexander",
        team: "OKC", points: 30.2,
        rebounds: 7.2,
        assists: 6.4 
    },
    {   name: "Tyrese Maxey", 
        team: "PHI", 
        points: 29.8, 
        rebounds: 5.2, 
        assists: 6.8 
    },
    {   
        name: "Donovan Mitchell", 
        team: "CLE", 
        points: 29.6, 
        rebounds: 5.4, 
        assists: 4.7 
    },
    {
        name: "Joel Embiid",
        team: "PHI",
        points: 33,
        rebounds: 10.8,
        assists: 5.7,
        blocks: 1.5,
        turnovers: 4.2
    },
    {
        name: "Jalen Brunson",
        team: "NYK",
        points: 32.4,
        rebounds: 3.3,
        assists: 7.5,
        blocks: 0.2,
        turnovers: 2.7
    },
    {
        name: "Shai Gilgeous-Alexander",
        team: "OKC",
        points: 30.2,
        rebounds: 7.2,
        assists: 6.4,
        blocks: 1.7,
        turnovers: 2.2
    },
    {
        name: "Tyrese Maxey",
        team: "PHI",
        points: 29.8,
        rebounds: 5.2,
        assists: 6.8,
        blocks: 0.3,
        turnovers: 2.2
    },
    {
        name: "Donovan Mitchell",
        team: "CAVS",
        points: 29.6,
        rebounds: 5.4,
        assists: 4.7,
        blocks: 0.3,
        turnovers: 2.8
    },
    {
        name: "Luka Dončić",
        team: "DAL",
        points: 28.9,
        rebounds: 9.5,
        assists: 8.1,
        blocks: 0.4,
        turnovers: 4.1
    },
    {
        name: "Nikola Jokić",
        team: "DEN",
        points: 28.7,
        rebounds: 13.4,
        assists: 8.7,
        blocks: 0.7,
        turnovers: 3.3
    },
    {
        name: "Anthony Davis",
        team: "LAL",
        points: 27.8,
        rebounds: 15.6,
        assists: 4,
        blocks: 1.6,
        turnovers: 2.2
    },
    {
        name: "LeBron James",
        team: "LAL",
        points: 27.8,
        rebounds: 6.8,
        assists: 8.8,
        blocks: 1,
        turnovers: 3.8
    },
    {
        name: "Anthony Edwards",
        team: "MIN",
        points: 27.6,
        rebounds: 7,
        assists: 6.5,
        blocks: 0.6,
        turnovers: 3.3
    },
    {
        name: "Devin Booker",
        team: "PHX",
        points: 27.5,
        rebounds: 3.3,
        assists: 6,
        blocks: 0.3,
        turnovers: 2.8
    },
    {
        name: "Paolo Banchero",
        team: "ORL",
        points: 27,
        rebounds: 8.6,
        assists: 4,
        blocks: 0.6,
        turnovers: 4.6
    },
    {
        name: "Kevin Durant",
        team: "PHX",
        points: 26.8,
        rebounds: 6.5,
        assists: 3.3,
        blocks: 1.5,
        turnovers: 2.5
    },
    {
        name: "Jayson Tatum",
        team: "BOS",
        points: 25,
        rebounds: 9.7,
        assists: 6.3,
        blocks: 0.7,
        turnovers: 2.6
    },
    {
        name: "Khris Middleton",
        team: "MIL",
        points: 24.7,
        rebounds: 9.2,
        assists: 4.7,
        blocks: 0.2,
        turnovers: 2.3
    },
    {
        name: "Jaylen Brown",
        team: "BOS",
        points: 23.9,
        rebounds: 5.9,
        assists: 3.3,
        blocks: 0.6,
        turnovers: 2.7
    },
    {
        name: "Bam Adebayo",
        team: "MIA",
        points: 22.6,
        rebounds: 9.4,
        assists: 3.8,
        blocks: 0,
        turnovers: 1.6
    },
    {
        name: "Kyrie Irving",
        team: "DAL",
        points: 22.1,
        rebounds: 3.7,
        assists: 5.1,
        blocks: 0.3,
        turnovers: 2.3
    },
    {
        name: "Pascal Siakam",
        team: "IND",
        points: 21.6,
        rebounds: 7.5,
        assists: 3.8,
        blocks: 0.4,
        turnovers: 1.1
    },
    {
        name: "James Harden",
        team: "LAC",
        points: 21.2,
        rebounds: 4.5,
        assists: 8,
        blocks: 1,
        turnovers: 2.3
    },
    {
        name: "Jamal Murray",
        team: "DEN",
        points: 20.6,
        rebounds: 4.3,
        assists: 5.6,
        blocks: 0.5,
        turnovers: 2.6
    },
    {
        name: "Paul George",
        team: "LAC",
        points: 19.5,
        rebounds: 6.8,
        assists: 4.8,
        blocks: 0.5,
        turnovers: 2.3
    },
    {
        name: "Karl-Anthony Towns",
        team: "MIN",
        points: 19.1,
        rebounds: 9,
        assists: 2.6,
        blocks: 0.2,
        turnovers: 1.7
    },
    {
        name: "Franz Wagner",
        team: "ORL",
        points: 18.9,
        rebounds: 6.9,
        assists: 4.4,
        blocks: 1.3,
        turnovers: 1.3
    },
    {
        name: "Jalen Williams",
        team: "OKC",
        points: 18.7,
        rebounds: 6.8,
        assists: 5.4,
        blocks: 0.5,
        turnovers: 1.9
    },
    {
        name: "Tyrese Haliburton",
        team: "IND",
        points: 18.7,
        rebounds: 4.8,
        assists: 8.2,
        blocks: 0.7,
        turnovers: 2.1
    },
    {
        name: "Donte DiVincenzo",
        team: "NYK",
        points: 17.8,
        rebounds: 4,
        assists: 2.6,
        blocks: 0.9,
        turnovers: 1.2
    },
    {
        name: "CJ McCollum",
        team: "NOP",
        points: 17.8,
        rebounds: 4.8,
        assists: 4.8,
        blocks: 0.8,
        turnovers: 4
    },
    {
        name: "Brook Lopez",
        team: "MIL",
        points: 17.7,
        rebounds: 4.3,
        assists: 1.8,
        blocks: 1.3,
        turnovers: 1.5
    },
    {
        name: "Myles Turner",
        team: "IND",
        points: 17,
        rebounds: 6.6,
        assists: 2.1,
        blocks: 1.5,
        turnovers: 1.9
    },
    {
        name: "Austin Reaves",
        team: "LAL",
        points: 16.8,
        rebounds: 3.8,
        assists: 3.6,
        blocks: 0.6,
        turnovers: 0.8
    },
    {
        name: "Tyler Herro",
        team: "MIA",
        points: 16.8,
        rebounds: 3.6,
        assists: 5.4,
        blocks: 0,
        turnovers: 2.8
    },
    {
        name: "Derrick White",
        team: "BOS",
        points: 16.7,
        rebounds: 4.3,
        assists: 4.1,
        blocks: 1.2,
        turnovers: 0.8
    },
    {
        name: "Bobby Portis",
        team: "MIL",
        points: 16.5,
        rebounds: 11.3,
        assists: 1,
        blocks: 0.2,
        turnovers: 1.5
    },
    {
        name: "Bradley Beal",
        team: "PHX",
        points: 16.5,
        rebounds: 2.8,
        assists: 4.5,
        blocks: 0.3,
        turnovers: 3.3
    },
    {
        name: "Ivica Zubac",
        team: "LAC",
        points: 16.2,
        rebounds: 9.3,
        assists: 1,
        blocks: 0.5,
        turnovers: 1.3
    },
    {
        name: "Evan Mobley",
        team: "CAVS",
        points: 16,
        rebounds: 9.3,
        assists: 2.3,
        blocks: 2.2,
        turnovers: 1.8
    },
    {
        name: "Michael Porter Jr.",
        team: "DEN",
        points: 15.8,
        rebounds: 6.8,
        assists: 1.1,
        blocks: 0.8,
        turnovers: 1.5
    },
    {
        name: "Darius Garland",
        team: "CAVS",
        points: 15.7,
        rebounds: 3.6,
        assists: 5.8,
        blocks: 0.2,
        turnovers: 2.3
    },
    {
        name: "Chet Holmgren",
        team: "OKC",
        points: 15.6,
        rebounds: 7.2,
        assists: 2.1,
        blocks: 2.5,
        turnovers: 1.9
    },
    {
        name: "Andrew Nembhard",
        team: "IND",
        points: 14.9,
        rebounds: 3.3,
        assists: 5.5,
        blocks: 0.2,
        turnovers: 1.4
    },
    {
        name: "Jalen Suggs",
        team: "ORL",
        points: 14.7,
        rebounds: 5.1,
        assists: 3.3,
        blocks: 0.4,
        turnovers: 2.9
    },
    {
        name: "Josh Hart",
        team: "NYK",
        points: 14.5,
        rebounds: 11.5,
        assists: 4.5,
        blocks: 0.8,
        turnovers: 2.6
    },
    {
        name: "Jonas Valančiūnas",
        team: "NOP",
        points: 14.5,
        rebounds: 11,
        assists: 1.3,
        blocks: 0,
        turnovers: 2.5
    },
    {
        name: "Aaron Gordon",
        team: "DEN",
        points: 14.3,
        rebounds: 7.3,
        assists: 4.4,
        blocks: 0.6,
        turnovers: 1.5
    },
    {
        name: "Brandon Ingram",
        team: "NOP",
        points: 14.3,
        rebounds: 4.5,
        assists: 3.3,
        blocks: 1.3,
        turnovers: 2.3
    },
    {
        name: "D'Angelo Russell",
        team: "LAL",
        points: 14.2,
        rebounds: 2.8,
        assists: 4.2,
        blocks: 0.2,
        turnovers: 1.8
    },
    {
        name: "Kelly Oubre Jr.",
        team: "PHI",
        points: 13.2,
        rebounds: 4,
        assists: 1.7,
        blocks: 1.2,
        turnovers: 1.3
    },
    {
        name: "Jrue Holiday",
        team: "BOS",
        points: 13.2,
        rebounds: 6.1,
        assists: 4.4,
        blocks: 0.6,
        turnovers: 1.5
    }
];

const playerTableBody = document.querySelector('#playerTable tbody');
const searchInput = document.getElementById('search');
const teamFilter = document.getElementById('teamFilter');
const toggleDarkModeButton = document.getElementById('toggleDarkMode');


function displayPlayers(data) {
    playerTableBody.innerHTML = '';
    data.forEach(player => {
        const row = document.createElement('tr');
        row.innerHTML = `
            <td>${player.name}</td>
            <td>${player.team}</td>
            <td>${player.points}</td>
            <td>${player.rebounds}</td>
            <td>${player.assists}</td>
        `;
        playerTableBody.appendChild(row);
    });
}


searchInput.addEventListener('input', () => {
    const searchTerm = searchInput.value.toLowerCase();
    const filteredPlayers = players.filter(player =>
        player.name.toLowerCase().includes(searchTerm)
    );
    displayPlayers(filteredPlayers);
});


teamFilter.addEventListener('change', () => {
    const team = teamFilter.value;
    const filteredPlayers = team === 'all' ? players : players.filter(player => player.team === team);
    displayPlayers(filteredPlayers);
});


toggleDarkModeButton.addEventListener('click', () => {
    document.body.classList.toggle('dark-mode');
});


displayPlayers(players);