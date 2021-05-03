# CGE - Calibrador de Gnômon Eletrônico
Esse projeto consiste em criar um programa que seja capaz de gerar dados perfeitos de um gnômon, sem nenhuma interferência externa. Além de comparar estes dados gerados artificalmente com os dados de um gnômon que existe, e então produzir gráficos que informe o quanto está descalibrado.

Para auxiliar no entendimento do projeto, decidiu-se criar este arquivo para explicar alguns conceitos de forma enxuta e sucinta.

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
	O seno serve para calcular a distância em relação a linha do primeiro dia do ano.

	Obs: A fórmula com cosseno e 'n + 10' retorna quase o mesmo valor da fórmula com seno 'n + 284'

#### Ângulo da Hora Solar:
	'h = 15 * (hour + (((seg / 60) + min) / 60)) - 12;'

	Apoio: https://pt.qaz.wiki/wiki/Hour_angle
	
	É o ângulo do sol em relação ao meio dia. Pela manhã é negativo e pela tarde é positivo.
	Calcula-se multiplicando 15° pelo número de horas passadas.

#### Excentricidade:
	(Não aparece nos códigos, porém aparece nos conceitos físicos)

	Apoio: https://blog.biologiatotal.com.br/leis-de-kepler/

	É a diferença entre o centro da elipse (real) e o ponto de interesse (sol).
	Varia entre 0 e 1.

#### Altura Solar:
	'altura_sol = Math.asin(Math.cos(this.h) * Math.cos(declination) * Math.cos(this.latitude) + Math.sin(declination) * Math.sin(this.latitude));'

	Apoio: https://solarsena.com/solar-elevation-angle-altitude

	É o ângulo que determina a altura do sol em relação ao horizonte.
	Sendo o máximo quando está no zênite. E negativo quando está de noite.

#### Azimute Solar:
	'azimute_sol = Math.acos((Math.sin(this.latitude) - Math.sin(this.altura_sol) * Math.sin(this.latitude)) / (Math.cos(this.altura_sol) * Math.cos(this.latitude)));'

	Apoio: https://solarsena.com/solar-azimuth-angle-calculator-solar-panels

	Ângulo do sol em relação ao norte.

#### Ângulo Zenital:
	'angulo_zenite = Math.acos(Math.sin(this.altura_sol));'

	Apoio: https://solarsena.com/solar-elevation-angle-altitude

	Ângulo do sol em relação ao zênite.