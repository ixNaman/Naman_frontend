const duaLipaInfo = {
    "artist": "Dua Lipa",
    "birthDate": "August 22, 1995",
    "birthPlace": "London, England",
    "nationality": "British",
    "genres": ["Pop", "Dance", "R&B"],
    "albums": [
      {
        "title": "Dua Lipa",
        "releaseYear": 2017,
        "singles": ["New Rules", "Be the One", "IDGAF"]
      },
      {
        "title": "Future Nostalgia",
        "releaseYear": 2020,
        "singles": ["Don't Start Now", "Physical", "Levitating"]
      }
    ],
    "awards": {
      "grammys": 2,
      "britAwards": 3,
      "mtvAwards": 1
    },
    "socialMedia": {
      "instagram": "@dualipa",
      "twitter": "@DUALIPA"
    }
  };

  const para = document.createElement("p");
  const node = document.createTextNode(`Artist:${duaLipaInfo.artist}`);
  para.appendChild(node);
  const element = document.getElementById("duaLipaInfo");
  element.appendChild(para);

  const para1 = document.createElement("p");
  const node1 = document.createTextNode(`Birthdate:${duaLipaInfo.birthDate}`);
  para1.appendChild(node1);
  element.appendChild(para1);

  const para2 = document.createElement("p");
  const node2 = document.createTextNode(`Birthplace:${duaLipaInfo.birthPlace}`);
  para2.appendChild(node2);
  element.appendChild(para2);

  const para3 = document.createElement("p");
  const node3 = document.createTextNode(`Nationality:${duaLipaInfo.nationality}`);
  para3.appendChild(node3);
  element.appendChild(para3);
  
  const para4 = document.createElement("p");
  const node4 = document.createTextNode(`genres: ${duaLipaInfo.genres}`)
  para4.appendChild(node4);
  element.appendChild(para4);

  const para5 = document.createElement("p");
  duaLipaInfo.albums.forEach(albums=>{
  const para5 = document.createElement("p")
  const node5 =document.createTextNode(albums.title)
  para5.appendChild(node5)
  element.appendChild(para5)
  });
  