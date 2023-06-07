# Cryptomonedas
Proyecto para solucionar dos requerimientos puntuales

---
## Primera parte - Analisis entre los precios de Binance y Crypto.com
---

### Descripcion del problema

- Accede a las APIs públicas de Binance y Crypto.com para obtener datos de precios de Activos Digitales en tiempo real.
- Implementa un algoritmo o script que compare los precios de Activos Digitales en ambos exchanges y determine la diferencia porcentual entre ellos.
- Encuentra la mayor diferencia porcentual entre los precios de Activos Digitales en Binance y Crypto.com.
- Genera una salida que muestre claramente la mayor diferencia encontrada y qué exchange tiene el precio más alto y cuál tiene el más bajo.
- Explicar brevemente cómo se puede aprovechar esta diferencia para arbitraje y cuál sería el posible beneficio.

### Instalacion y ejecucion 
Clonar el repositorio y ejecutar los siguientes comandos

```bash
  npm install
  node binanceData.js
```

Se mostrara en orden una lista descendente las cryptos en los cuales su diferencia es mayor de una plataforma a otr

#### Ejemplo

> El activo digital BTCUSDT tiene una diferencia del 0.018426239706845437%. El precio más alto está en Crypto.com con 26974.89 y el más bajo en Binance con 26969.92.

### Utilidad


En términos de arbitraje, la diferencia porcentual entre los precios de las criptomonedas en diferentes plataformas puede proporcionar oportunidades de arbitraje. El arbitraje implica comprar una criptomoneda en una plataforma donde su precio es más bajo y venderla en otra plataforma donde su precio es más alto, obteniendo así un beneficio por la diferencia de precios.
En este caso, el programa identifica las criptomonedas que tienen diferencias de precios entre Binance y Crypto.com, y muestra aquellas con la mayor diferencia porcentual. Si se detecta una diferencia significativa, un posible enfoque para aprovecharla sería comprar la criptomoneda en la plataforma donde tiene el precio más bajo (por ejemplo, Crypto.com) y venderla en la plataforma donde tiene el precio más alto (por ejemplo, Binance).
El beneficio potencial dependerá de la magnitud de la diferencia porcentual y el volumen de la transacción. Cuanto mayor sea la diferencia y mayor sea el volumen de la transacción, mayor será el beneficio potencial.


---
## Segunda parte - Predicción de precio de Bitcoin
---

### Descipcion del problema
- Implementa un algoritmo o modelo predictivo para predecir el precio futuro de Bitcoin.
- Explica el método utilizado para la predicción, ya sea utilizando análisis técnico, aprendizaje automático u otro enfoque.
- Proporciona una predicción del precio de Bitcoin para un período específico en el futuro.
- Muestra la salida de la predicción junto con una breve explicación del método utilizado y cualquier consideración relevante.

### Ejecucion
Debido a la complejidad, se uso python para realizar la creacion, entrenamiento y genrerar la solucion.

----
## License

MIT

**Free Software **
