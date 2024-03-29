// document.addEventListener("DOMContentLoaded", function() {
//     const disciplinasList = document.querySelector(".disciplinas-list");

//     // Crie um objeto para rastrear o estado de cada disciplina
//     const state = {};

//     disciplinasList.addEventListener("click", function(e) {
//         e.preventDefault();
//         if (e.target.tagName === "A") {
//             const disciplina = e.target.getAttribute("data-disciplina");
//             const videosContainer = document.querySelector(`.videos-container[data-disciplina="${disciplina}"]`);

//             // Verifique o estado atual da disciplina
//             if (!state[disciplina] || state[disciplina] === "fechado") {
//                 // Se a disciplina estiver fechada, abra-a e atualize o estado para "aberto"
//                 state[disciplina] = "aberto";

//                 // Substitua os vídeos abaixo pelos vídeos reais para a disciplina selecionada
//                 const videos = {
//                     "Matemática": [
//                         { title: "Livro de matemática do Manual do Mundo", url: "https://www.youtube.com/watch?v=ZX1WSLhqTgw&pp=ygUbbWF0ZW1hdGljYSAgbWFudWFsIGRvIG11bmRv" },
//                         { title: "Regra de 3", url: "https://www.youtube.com/watch?v=ls6YLVn4_1o&pp=ygUbbWF0ZW1hdGljYSAgbWFudWFsIGRvIG11bmRv" },
//                     ],
//                     "Física": [
//                         { title: "Usina Nuclear", url: "https://www.youtube.com/watch?v=ZsR-2zkEwCM&pp=ygUXZmlzaWNhICBtYW51YWwgZG8gbXVuZG8%3D" },
//                         { title: "Ímãs", url: "https://www.youtube.com/watch?v=jCL2dLh5MME&pp=ygUXZmlzaWNhICBtYW51YWwgZG8gbXVuZG8%3D" },
//                     ],
//                     "Química": [
//                         { title: " Tabela Periódica", url: "https://www.youtube.com/watch?v=-NV-P6-yVZU&pp=ygUYcXVpbWljYSAgbWFudWFsIGRvIG11bmRv" },
//                         { title: "Bateria de Latinhas", url: "https://www.youtube.com/watch?v=-NV-P6-yVZU&pp=ygUYcXVpbWljYSAgbWFudWFsIGRvIG11bmRv" },
//                     ],
//                     // Adicione mais disciplinas e vídeos conforme necessário
//                 };
//                  // Verifique o estado atual da disciplina
            
//                 if (videos[disciplina]) {
//                     videosContainer.innerHTML = "";
//                     videos[disciplina].forEach(video => {
//                         const videoElement = document.createElement("a");
//                         videoElement.href = video.url;
//                         videoElement.textContent = video.title;
//                         videoElement.addEventListener("click", function(e) {
//                             e.preventDefault();
//                             window.open(video.url, "_blank");
//                         });
//                         videosContainer.appendChild(videoElement);
//                     });
//                     videosContainer.style.display = "block";
//                 }
//             } else {
//                 // Se a disciplina estiver aberta, feche-a e atualize o estado para "fechado"
//                 state[disciplina] = "fechado";
//                 videosContainer.style.display = "none";
                
//             }
//         if (!state[disciplina] || state[disciplina] === "fechado") {
//             // Se a disciplina estiver fechada, abra-a e atualize o estado para "aberto"
//             state[disciplina] = "aberto";
//             e.target.classList.add("aberta"); // Adiciona a classe "aberta" ao botão da matéria
//             // Restante do seu código...
//         } else {
//             // Se a disciplina estiver aberta, feche-a e atualize o estado para "fechado"
//             state[disciplina] = "fechado";
//             e.target.classList.remove("aberta"); // Remove a classe "aberta" do botão da matéria
//             // Restante do seu código...
//         }
//         }
//     });
// });

document.addEventListener("DOMContentLoaded", function() {
    const disciplinasList = document.querySelector(".disciplinas-list");

    // Crie um objeto para rastrear o estado de cada disciplina
    const state = {};

    disciplinasList.addEventListener("click", function(e) {
        e.preventDefault();
        if (e.target.tagName === "A") {
            const disciplina = e.target.getAttribute("data-disciplina");
            const videosContainer = document.querySelector(`.videos-container[data-disciplina="${disciplina}"]`);

            // Verifique o estado atual da disciplina
            if (!state[disciplina] || state[disciplina] === "fechado") {
                // Se a disciplina estiver fechada, abra-a e atualize o estado para "aberto"
                state[disciplina] = "aberto";
                e.target.classList.add("aberta"); // Adiciona a classe "aberta" ao botão da matéria

                // Substitua os vídeos abaixo pelos vídeos reais para a disciplina selecionada
                const videos = {
                    "Matemática": [
                        { title: "Livro de matemática do Manual do Mundo", url: "https://www.youtube.com/watch?v=ZX1WSLhqTgw&pp=ygUbbWF0ZW1hdGljYSAgbWFudWFsIGRvIG11bmRv" },
                        { title: "Regra de 3", url: "https://www.youtube.com/watch?v=ls6YLVn4_1o&pp=ygUbbWF0ZW1hdGljYSAgbWFudWFsIGRvIG11bmRv" },
                    ],
                    "Física": [
                        { title: "Usina Nuclear", url: "https://www.youtube.com/watch?v=ZsR-2zkEwCM&pp=ygUXZmlzaWNhICBtYW51YWwgZG8gbXVuZG8%3D" },
                        { title: "Ímãs", url: "https://www.youtube.com/watch?v=jCL2dLh5MME&pp=ygUXZmlzaWNhICBtYW51YWwgZG8gbXVuZG8%3D" },
                    ],
                    "Química": [
                        { title: " Tabela Periódica", url: "https://www.youtube.com/watch?v=-NV-P6-yVZU&pp=ygUYcXVpbWljYSAgbWFudWFsIGRvIG11bmRv" },
                        { title: "Bateria de Latinhas", url: "https://www.youtube.com/watch?v=-NV-P6-yVZU&pp=ygUYcXVpbWljYSAgbWFudWFsIGRvIG11bmRv" },
                    ],
                    "História": [
                        { title: " Segunda Guerra Mundial", url: "https://youtu.be/TV4Vzda09Ck?si=X19kghSxciatGBcK" },
                        { title: "A História da Faixa de Gaza", url: "https://youtu.be/XMq8z6QtlMg?si=PAjAi-QOvZuuAtr0" },
                        { title: "500 anos do Brasil em 1 hora", url: "https://www.youtube.com/watch?v=q7E4XrfGGnE&ab_channel=CanalNostalgia" },
                    ],
                };

                // Verifique o estado atual da disciplina
                if (videos[disciplina]) {
                    videosContainer.innerHTML = "";
                    videos[disciplina].forEach(video => {
                        const videoElement = document.createElement("a");
                        videoElement.href = video.url;
                        videoElement.textContent = video.title;
                        videoElement.addEventListener("click", function(e) {
                            e.preventDefault();
                            window.open(video.url, "_blank");
                        });
                        videosContainer.appendChild(videoElement);
                    });
                    videosContainer.style.display = "block";
                }
            } else {
                // Se a disciplina estiver aberta, feche-a e atualize o estado para "fechado"
                state[disciplina] = "fechado";
                e.target.classList.remove("aberta"); // Remove a classe "aberta" do botão da matéria
                videosContainer.style.display = "none";
            }
        }
    });
});
