# Backend Autos-col

Este proyecto proporciona una API RESTful para la gestión de clientes, vehículos, pagos y celdas en un sistema de asesorías de vehículos.

## Requisitos

- Node.js v20.2.0 o superior
- MongoDB

## Instalación

1. Clona el repositorio:
    ```bash
    git clone https://github.com/tuusuario/backend-asesorias.git
    ```

2. Navega al directorio del proyecto:
    ```bash
    cd backend-asesorias
    ```

3. Instala las dependencias:
    ```bash
    npm install
    ```

4. Crea un archivo `.env` en la raíz del proyecto y configura tus variables de entorno:
    ```env
    PORT=3000
    MONGODB_URI=mongodb://localhost:27017/tu_base_de_datos
    ```

5. Inicia el servidor:
    ```bash
    npm start
    ```

## Uso

### Endpoints

#### Clientes

- **Crear cliente**
    ```http
    POST /api/v1/cliente
    ```
    - Body:
        ```json
        {
            "nombre": "John Doe",
            "email": "john@example.com"
        }
        ```

- **Obtener todos los clientes**
    ```http
    GET /api/v1/cliente
    ```

- **Obtener cliente por ID**
    ```http
    GET /api/v1/cliente/:id
    ```

- **Actualizar cliente**
    ```http
    PUT /api/v1/cliente/:id
    ```
    - Body:
        ```json
        {
            "nombre": "Jane Doe",
            "email": "jane@example.com"
        }
        ```

- **Eliminar cliente**
    ```http
    DELETE /api/v1/cliente/:id
    ```

#### Vehículos

- **Crear vehículo**
    ```http
    POST /api/v1/vehiculo
    ```
    - Body:
        ```json
        {
            "placa": "ABC123",
            "modelo": "Toyota Corolla",
            "color": "Rojo",
            "detalles": "Sedán, 2021",
            "cliente": "cliente_id",
            "celda": "celda_id"
        }
        ```

- **Obtener todos los vehículos**
    ```http
    GET /api/v1/vehiculo
    ```

- **Obtener vehículo por ID**
    ```http
    GET /api/v1/vehiculo/:id
    ```

- **Actualizar vehículo**
    ```http
    PUT /api/v1/vehiculo/:id
    ```
    - Body:
        ```json
        {
            "placa": "XYZ789",
            "modelo": "Honda Civic",
            "color": "Azul",
            "detalles": "Sedán, 2020",
            "cliente": "nuevo_cliente_id",
            "celda": "nueva_celda_id"
        }
        ```

- **Eliminar vehículo**
    ```http
    DELETE /api/v1/vehiculo/:id
    ```

#### Pagos

- **Crear pago**
    ```http
    POST /api/v1/pago
    ```
    - Body:
        ```json
        {
            "fechaPago": "2023-05-19",
            "cliente": "cliente_id"
        }
        ```

- **Obtener todos los pagos**
    ```http
    GET /api/v1/pago
    ```

- **Obtener pago por ID**
    ```http
    GET /api/v1/pago/:id
    ```

- **Actualizar pago**
    ```http
    PUT /api/v1/pago/:id
    ```
    - Body:
        ```json
        {
            "fechaPago": "2023-06-20",
            "cliente": "nuevo_cliente_id"
        }
        ```

- **Eliminar pago**
    ```http
    DELETE /api/v1/pago/:id
    ```

#### Celdas

- **Crear celda**
    ```http
    POST /api/v1/celda
    ```
    - Body:
        ```json
        {
            "seccion": "A",
            "tipo": "Cubierta",
            "disponibilidad": true
        }
        ```

- **Obtener todas las celdas**
    ```http
    GET /api/v1/celda
    ```

- **Obtener celda por ID**
    ```http
    GET /api/v1/celda/:id
    ```

- **Actualizar celda**
    ```http
    PUT /api/v1/celda/:id
    ```
    - Body:
        ```json
        {
            "seccion": "B",
            "tipo": "Descubierta",
            "disponibilidad": false
        }
        ```

- **Eliminar celda**
    ```http
    DELETE /api/v1/celda/:id
    ```

