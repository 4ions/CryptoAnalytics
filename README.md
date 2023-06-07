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
Debido a la complejidad, se uso python para realizar la creacion, entrenamiento y generar la solucion.

El codigo esta alojado en [Google Colab](https://colab.research.google.com/drive/1vzaEqjcv0Pd7pHTWjbObHnvIo0_gkPBn?usp=sharing)

### Detalles

El método utilizado para predecir el precio del Bitcoin en este código es una Red Neuronal Recurrente (RNN) con Long Short-Term Memory (LSTM). Aquí está el desglose de cómo funciona:

- Recopilación de datos: El código comienza recopilando datos de precios de Bitcoin desde el 01-01-2020 hasta el 08-03-2023 utilizando la API de CoinGecko. Los datos se almacenan en un DataFrame de pandas.

- Preprocesamiento de datos: Los datos de precios se escalan a un rango de 0 a 1 utilizando MinMaxScaler para facilitar el entrenamiento de la red neuronal. Luego, se crea una estructura de datos con 60 pasos de tiempo y 1 salida. Esto significa que para predecir el precio en un momento dado, la red utilizará los precios de los 60 momentos anteriores.

- Construcción del modelo: Se construye un modelo de RNN con 4 capas LSTM y capas de Dropout después de cada capa LSTM para prevenir el sobreajuste. La última capa es una capa densa que predice el precio del Bitcoin.

- Entrenamiento del modelo: El modelo se entrena con los datos preprocesados durante 100 épocas.

- Predicción de precios: Para predecir los precios, se toman los últimos 60 días de precios de cierre y se alimentan al modelo para predecir el precio del próximo día. Este proceso se repite 10 veces para predecir los precios de los próximos 10 días.

- Visualización de resultados: Finalmente, los precios predichos se grafican junto con los precios actuales para visualizar el rendimiento del modelo.

#### Posibles mejoras:

- Aumentar los datos de entrenamiento: Si es posible, obtener más datos históricos podría mejorar la precisión del modelo.

- Ajuste de hiperparámetros: Podría ser útil experimentar con diferentes configuraciones de la red, como el número de capas LSTM, el número de unidades en cada capa, la tasa de dropout, el optimizador y la función de pérdida.

- Incorporar más características: Además del precio, podrían incluirse otras características como el volumen de transacciones, los datos de sentimiento de las redes sociales, etc.

- Validación cruzada: Podría ser útil implementar una validación cruzada para evaluar mejor el rendimiento del modelo.

- Uso de modelos más avanzados: Podría ser útil experimentar con modelos más avanzados como las Redes Neuronales Convolucionales (CNN) o los Transformers, que han demostrado un buen rendimiento en tareas de series temporales.

----
## License

MIT

**Free Software **
