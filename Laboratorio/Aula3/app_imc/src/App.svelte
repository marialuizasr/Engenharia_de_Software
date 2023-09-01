<script>
	let peso = 0;
	let altura = 0;
	let imc = 0;

	function calcularIMC() {
		if (peso > 0 && altura > 0) {
			imc = (peso / Math.pow(altura, 2)).toFixed(1);
		} else imc = 0;
	}
</script>

<main>
	<h1>Calculadora de IMC</h1>
	<label>
		Peso (kg): <input
			type="number"
			bind:value={peso}
			on:input={calcularIMC}
		/>
	</label>
	<label>
		Altura (m): <input
			type="number"
			bind:value={altura}
			on:input={calcularIMC}
		/>
	</label>
	{#if imc > 0}
		<p>
			Seu IMC é {imc} e você está
			{#if imc <= 18.5}
				<b class="laranja">abaixo do peso.</b>
			{:else if imc <= 24.9}
				<b class="verde">no peso ideal. Parabéns!</b>
			{:else if imc <= 29.9}
				<b class="amarelo">levemente acima do peso.</b>
			{:else if imc <= 34.9}
				<b class="laranja">com obesidade grau I.</b>
			{:else if imc <= 39.9}
				<b class="vermelho">com obesidade grau II (severa).</b>
			{:else}
				<b class="vermelho">com obesidade grau III (mórbida).</b>
			{/if}
		</p>
	{/if}
</main>

<style>
	main {
		font-family: sans-serif;
		text-align: center;
		padding: 2em;
	}

	h1 {
		font-size: 1.5em;
		margin-bottom: 1rem;
	}

	label {
		display: block;
		margin-bottom: 0.5rem;
	}

	input {
		padding: 0.25rem;
	}

	.verde {
		color: green;
	}

	.amarelo {
		color: yellow;
		background-color: rgba(0, 0, 0, 0.1);
		padding: 0.1em 0.3em;
		text-shadow: 1px 1px 0px black;
	}

	.laranja {
		color: orange;
	}

	.vermelho {
		color: red;
	}
</style>
