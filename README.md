Aqui está a documentação completa e estruturada para os usuários consumirem a sua API de conversão de unidades. 

---

# Documentação da API: Conversor de Unidades

Bem-vindo à documentação oficial da API **atividadeConversor**. Esta API RESTful permite a conversão rápida e fácil entre diversas unidades de medida, organizadas por categorias como Área, Comprimento, Massa, Temperatura e Velocidade.

## 📌 Informações Básicas

* **URL Base:** `http://sua-url-base.com` *(Substitua pelo endereço real onde a API está hospedada, como localhost:3000 ou um domínio em produção)*.
* **Formato de Resposta Esperado:** JSON.
* **Parâmetro de Rota (`/valor`):** Em todos os *endpoints* listados abaixo, substitua a palavra `valor` pelo número real que você deseja converter (ex: `/massa/kg-para-grama/5.5`).

---

## 🛠️ Rotas Disponíveis

### 1. Área
Rotas para conversão de unidades de superfície.

| Método | Rota | Descrição | Exemplo de Uso |
| :--- | :--- | :--- | :--- |
| **GET** | `/area/m2-para-Km2/{valor}` | Converte metros quadrados (m²) para quilômetros quadrados (km²) | `/area/m2-para-Km2/1000000` |
| **GET** | `/area/m2-para-Ac2/{valor}` | Converte metros quadrados (m²) para acres | `/area/m2-para-Ac2/4046.86` |
| **GET** | `/area/m2-para-ft2/{valor}` | Converte metros quadrados (m²) para pés quadrados (ft²) | `/area/m2-para-ft2/100` |

### 2. Comprimento
Rotas para conversão de distâncias e unidades lineares.

| Método | Rota | Descrição | Exemplo de Uso |
| :--- | :--- | :--- | :--- |
| **GET** | `/comprimento/metros-para-km/{valor}` | Converte metros (m) para quilômetros (km) | `/comprimento/metros-para-km/1500` |
| **GET** | `/comprimento/metros-para-mi/{valor}` | Converte metros (m) para milhas (mi) | `/comprimento/metros-para-mi/5000` |
| **GET** | `/comprimento/metros-para-pe/{valor}` | Converte metros (m) para pés (ft) | `/comprimento/metros-para-pe/10` |

### 3. Massa
Rotas para conversão de peso/massa.

| Método | Rota | Descrição | Exemplo de Uso |
| :--- | :--- | :--- | :--- |
| **GET** | `/massa/kg-para-grama/{valor}`| Converte quilogramas (kg) para gramas (g) | `/massa/kg-para-grama/2.5` |
| **GET** | `/massa/kg-para-lb/{valor}` | Converte quilogramas (kg) para libras (lb) | `/massa/kg-para-lb/10` |
| **GET** | `/massa/kg-para-oz/{valor}` | Converte quilogramas (kg) para onças (oz) | `/massa/kg-para-oz/1` |

### 4. Temperatura
Rotas para conversão de escalas termométricas.

| Método | Rota | Descrição | Exemplo de Uso |
| :--- | :--- | :--- | :--- |
| **GET** | `/temperatura/c-para-f/{valor}` | Converte graus Celsius (°C) para Fahrenheit (°F) | `/temperatura/c-para-f/25` |
| **GET** | `/temperatura/c-para-k/{valor}` | Converte graus Celsius (°C) para Kelvin (K) | `/temperatura/c-para-k/0` |
| **GET** | `/temperatura/f-para-c/{valor}` | Converte graus Fahrenheit (°F) para Celsius (°C) | `/temperatura/f-para-c/100` |

### 5. Velocidade
Rotas para conversão de velocidade escalar.

| Método | Rota | Descrição | Exemplo de Uso |
| :--- | :--- | :--- | :--- |
| **GET** | `/velocidade/kmh-para-ms/{valor}` | Converte km/h para metros por segundo (m/s) | `/velocidade/kmh-para-ms/100` |
| **GET** | `/velocidade/kmh-para-mis/{valor}` | Converte km/h para milhas por segundo (mi/s) | `/velocidade/kmh-para-mis/120` |
| **GET** | `/velocidade/kn-para-kmh/{valor}` | Converte Nós (knots) para km/h | `/velocidade/kn-para-kmh/50` |

---

## 💻 Exemplos de Consumo da API

Aqui estão exemplos práticos de como fazer uma requisição para a API utilizando diferentes linguagens e ferramentas.

**Exemplo:** Convertendo 25 graus Celsius para Fahrenheit.

### Usando cURL (Terminal)
```bash
curl -X GET "http://sua-url-base.com/temperatura/c-para-f/25"
```

### Usando JavaScript (Fetch API)
```javascript
fetch('http://sua-url-base.com/temperatura/c-para-f/25')
  .then(response => response.json())
  .then(data => console.log(data))
  .catch(error => console.error('Erro:', error));
```

### Usando Python (Requests)
```python
import requests

url = "http://sua-url-base.com/temperatura/c-para-f/25"
response = requests.get(url)

print(response.json())
```

---

## 📦 Estrutura de Retorno (Exemplo)

Embora o formato exato dependa da sua implementação interna, a API normalmente retornará um objeto JSON com o valor convertido.

**Exemplo de Resposta de Sucesso (Status 200 OK):**
```json
{
  "unidade_origem": "Celsius",
  "unidade_destino": "Fahrenheit",
  "valor_original": 25,
  "valor_convertido": 77
}
```

> **Nota:** Certifique-se de tratar adequadamente valores inválidos (como letras enviadas no lugar de números) para evitar erros no consumo da API. O ideal é que a API retorne um erro `400 Bad Request` nesses cenários.