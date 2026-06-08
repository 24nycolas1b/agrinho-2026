/* Configurações Gerais */
* {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
    font-family: 'Segoe UI', Tahoma, Geneva, Verdana, sans-serif;
    scroll-behavior: smooth;
}

body {
    color: #333;
    background-color: #f9f9f9;
}

/* Cabeçalho */
header {
    background-color: #1b4d3e;
    color: white;
    padding: 20px 50px;
    display: flex;
    justify-content: space-between;
    align-items: center;
    position: sticky;
    top: 0;
    z-index: 1000;
}

header .logo {
    font-size: 24px;
    font-weight: bold;
}

header .logo span {
    color: #81c784;
}

header nav a {
    color: white;
    text-decoration: none;
    margin-left: 20px;
    font-weight: 500;
    transition: color 0.3s;
}

header nav a:hover {
    color: #81c784;
}

/* Banner Principal (Hero) */
.hero {
    background: linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.5)), url('https://images.unsplash.com/photo-1500937386664-56d1dfef3854?auto=format&fit=crop&w=1200&q=80') no-repeat center center/cover;
    height: 80vh;
    display: flex;
    justify-content: center;
    align-items: center;
    text-align: center;
    color: white;
    padding: 0 20px;
}

.hero h1 {
    font-size: 48px;
    margin-bottom: 20px;
}

.hero p {
    font-size: 20px;
    margin-bottom: 30px;
    max-width: 600px;
    margin-left: auto;
    margin-right: auto;
}

.btn-principal {
    background-color: #2e7d32;
    color: white;
    padding: 12px 30px;
    text-decoration: none;
    border-radius: 25px;
    font-weight: bold;
    transition: background 0.3s;
}

.btn-principal:hover {
    background-color: #1b4d3e;
}

/* Seções */
.secao {
    padding: 80px 50px;
    text-align: center;
}

.bg-claro {
    background-color: #e8f5e9;
}

.secao h2 {
    font-size: 32px;
    margin-bottom: 40px;
    color: #1b4d3e;
}

/* Cards */
.cards-container {
    display: flex;
    justify-content: center;
    gap: 30px;
    flex-wrap: wrap;
}

.card {
    background: white;
    padding: