<script>
	import Jogador from "./Jogador.svelte";
	import Swal from "sweetalert2";

	function marcaGol() {
		console.log("Marcou 1 GOL");
		Swal.fire({
			icon: "success",
			title: "Gol!",
			text: "Você marcou um gol!",
		});
	}
</script>

<main>
	<h1>Exibe a informação quando marca GOL</h1>
	<Jogador acao={marcaGol} />
</main>
