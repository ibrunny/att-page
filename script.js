document.getElementById("ecoForm").addEventListener("submit", function(event) {
    event.preventDefault();

    const formData = {
        nome: document.getElementById("nome").value,
        email: document.getElementById("email").value,
        preferencia: document.getElementById("preferencia").value
    };

    console.log("Enviando dados:", formData);

    fetch("https://jsonplaceholder.typicode.com/posts", {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(formData)
    })
    .then(response => response.json())
    .then(data => {
        console.log("Resposta recebida:", data);
        alert("Obrigada, ainda temos poucas opções de comidas, em breve você receberá mais infos em seu email.");
        document.getElementById("ecoForm").reset(); // Limpa o formulário
    })
    .catch(error => {
        console.error("Erro ao enviar dados:", error);
        alert("Não foi possível processar seu cadastro. Tente novamente.");
    });
});
