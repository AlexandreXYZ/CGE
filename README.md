# CGE-Calibrador-de-Gnomon-Eletronico
Esse projeto consiste em criar um Programa que seja capaz de criar dados perfeitos de um Gnomon em sua forma perfeita, sem nenhum problema externo. Depois ele irá comparar com os Dados de um Gnomon que existe, e então produzir graficos que informe o quanto está descalibrado.

Para auxiliar no entendimento do projeto, decidiu-se criar este arquivo para explicar alguns conceitos de forma bem enxuta.

#### (Nome do tópico:)
	'(Como ele aparece nos códigos)'

	(Link de apoio, para fotos e etc.)

	(Explicação)

---------------

#### Declinação local:
	'declinacao = 23.45 * Math.sin(toRadian((360/365)*(284 + this.dia_sequencial)));'

	Apoio: https://www.if.ufrgs.br/~fatima/fis2016/tempo/tempo.htm
		   https://solarsena.com/solar-declination-angle-calculator

	O '360/365 * (284 + dia)' serve para calcular o ângulo em relação à posição da terra no primeiro dia do ano.
	O 'sin' serve para calcular a distância em relação a linha do primeiro dia do ano.

#### Ângulo da Hora Solar:
	'h'

	Apoio: https://pt.qaz.wiki/wiki/Hour_angle
	
	É o ângulo do sol em relação ao meio dia. Pela manhã é negativo e pela tarde é positivo.
	Calcula-se multiplicando 15º pelo número de horas passadas.

#### Excentricidade:
	(Não aparece nos códigos, porém aparece nos conceitos físicos)

	Apoio: https://blog.biologiatotal.com.br/leis-de-kepler/

	É a diferença entre o centro da elipse (real) e o sol.
	Varia entre 0 e 1.
