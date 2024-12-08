# Casos de Uso (Use Cases)

## UC1: Gestión de Enlaces de Productos
- **Actor principal:** Usuario  
- **Descripción:** El usuario agrega, edita o elimina enlaces de productos que desea comprar.  
- **Flujo principal:**
  1. El usuario accede a la pantalla de lista de productos.
  2. Pulsa el botón "Añadir enlace".
  3. Pega la URL del producto.
  4. Configura una prioridad (baja/media/alta).
  5. Guarda el enlace, y este se agrega a la lista principal.  
- **Flujo alternativo:**  
  - Si el enlace es inválido, el sistema muestra un mensaje de error y solicita una URL válida.

---

## UC2: Compras Automáticas
- **Actor principal:** Sistema  
- **Descripción:** El sistema revisa periódicamente el saldo disponible y compra productos según la lista priorizada.  
- **Flujo principal:**
  1. El sistema analiza el saldo en la cuenta del usuario.
  2. Revisa la lista de productos y selecciona el producto más prioritario dentro del presupuesto.
  3. Realiza la compra automáticamente y actualiza el estado del producto a "Comprado".  
- **Flujo alternativo:**  
  - Si no hay saldo suficiente, el sistema notifica al usuario que necesita añadir fondos.

---

## UC3: Gestión de Fondos
- **Actor principal:** Usuario  
- **Descripción:** El usuario gestiona el dinero disponible para compras dentro de la app.  
- **Flujo principal:**
  1. El usuario accede a la pantalla de fondos.
  2. Pulsa el botón "Añadir fondos".
  3. Introduce la cantidad y selecciona el método de pago.
  4. El sistema verifica la transacción y actualiza el saldo disponible.

---

## UC4: Notificaciones y Alertas
- **Actor principal:** Sistema  
- **Descripción:** El sistema notifica al usuario sobre eventos importantes.  
- **Flujo principal:**
  1. Notifica cuando un producto ha sido comprado.
  2. Informa si el saldo es insuficiente para realizar compras.
  3. Envía recordatorios periódicos de productos pendientes.

---

# Historias de Usuario (User Stories)

## EPIC 1: Gestión de Productos
1. **Como usuario**, quiero poder agregar enlaces de productos, para crear mi lista de deseos de compras.  
2. **Como usuario**, quiero asignar prioridades a los productos, para que el sistema compre primero lo más importante.  
3. **Como usuario**, quiero poder eliminar productos de la lista, para mantener solo lo relevante.

---

## EPIC 2: Gestión de Compras Automáticas
1. **Como usuario**, quiero que el sistema compre automáticamente productos según mi saldo, para no preocuparme por hacerlo manualmente.  
2. **Como usuario**, quiero recibir notificaciones cuando un producto sea comprado, para estar al tanto de mis gastos.  
3. **Como usuario**, quiero establecer límites de gasto semanales, para controlar mi presupuesto.

---

## EPIC 3: Gestión de Fondos
1. **Como usuario**, quiero poder añadir fondos fácilmente a mi cuenta, para financiar mis compras.  
2. **Como usuario**, quiero ver un resumen visual de mis finanzas, para saber cuánto dinero tengo disponible.  
3. **Como usuario**, quiero recibir alertas si mi saldo es bajo, para evitar quedarme sin dinero inesperadamente.

---

## EPIC 4: Personalización y Configuración
1. **Como usuario**, quiero activar o desactivar la función de compras automáticas, para tener más control sobre el sistema.  
2. **Como usuario**, quiero configurar recordatorios de productos pendientes, para no olvidarlos.  
3. **Como usuario**, quiero personalizar mis notificaciones, para recibir solo la información que considero relevante.
