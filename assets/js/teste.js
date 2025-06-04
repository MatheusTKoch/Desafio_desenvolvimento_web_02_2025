function resultadoDoTeste() {
        let contadorDoSim = 0;
        let resposta = "";
        const resultado = document.getElementById("resultadoDoTeste");
        for (let i = 1; i <= 10; i++) {
          const q1 = document.getElementById("q" + i + "s");
          const q11 = document.getElementById("q" + i + "n");

          if (q1.checked) {
            contadorDoSim++;
          } else if (!q1.checked && !q11.checked) {
            resposta = "Para ver o seu resultado não pode deixar nenhuma resposta em branco, Verifique se você deixou alguma em branco! 😀";
            break;
          }
        }
        resultado.style.padding = "10px";
        resultado.style.marginTop = "20px";
        resultado.style.borderRadius = "5px";
        resultado.style.fontWeight = "bold";
        resultado.style.fontSize = "30px";
        resultado.style.color = "black";
        if (resposta != "") {
          resultado.style.background = "red";
          resultado.style.color = "black";
          resultado.innerHTML = resposta;
        } else if (contadorDoSim >= 0 && contadorDoSim <= 2) {
          resultado.style.background = "green";
          resultado.innerHTML =
            "Você está conseguindo usar a tecnologia de um jeito que ajuda você a estudar e descansar. " +
            "Continua assim, que esse equilíbrio vai fazer toda a diferença no seu aprendizado! 🤩 ";
        } else if (contadorDoSim > 2 && contadorDoSim < 6) {
          resultado.style.background = "yellow";
          resultado.innerHTML =
            "Legal que você já percebeu algumas coisas para ajustar. " +
            "Com pequenas mudanças, tipo fazer pausas e diminuir o tempo no celular, seu foco e sua saúde só têm a ganhar. " +
            "Tamo junto nessa! 😳⚠️ ";
        } else {
          resultado.style.background = "red";
          resultado.innerHTML =
            "Tá sentindo que a tecnologia está tomando muito do seu tempo? Relaxa, " +
            "isso acontece com todo mundo! O importante é perceber e começar a mudar aos poucos, mais pausas, mais tempo pra você e pra sua vida fora da tela. " +
            "Confia que você é capaz! 🔴😬";
        }
      }