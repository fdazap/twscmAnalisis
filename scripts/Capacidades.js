const jsonData = {
  "Cliente": "Excelum SAS",
  "Fecha": "06/08/2023",
  "Version": "Inicial",
  "rows": [
    {
      "CATEGORIA": "INVENTARIOS",
      "ITEM": "1.1",
      "CAPACIDADES": "Identificar materias primas, productos intermedios y terminados",
      "DESCRIPCION": "Maestro de artículos con Código, Descripcción, Unidad de Medida, Estado, UMs Equivalente, Clasificación, Planeación, Costo",
      "ESTRATEGICO": "Mision Critica",
      "COBERTURATI": "Suficiente",
      "MADUREZ": "Repetible",
      "PRIORIDAD": "Media"
    },
    {
      "CATEGORIA": "INVENTARIOS",
      "ITEM": "1.2",
      "CAPACIDADES": "Identificar y controlar otros inventarios requeridos para el funcionamiento del negocios",
      "DESCRIPCION": "Identificación, clasificación, contabilización",
      "ESTRATEGICO": "Operativo",
      "COBERTURATI": "Suficiente",
      "MADUREZ": "Definido",
      "PRIORIDAD": "Baja"
    },
    {
      "CATEGORIA": "INVENTARIOS",
      "ITEM": "1.3",
      "CAPACIDADES": "Control de inventario de multiples máquilas para producto terminado, intermedios y materias primas",
      "DESCRIPCION": "Definición de almacenes Ilimitados, Empresa, Seguridad de Acceso",
      "ESTRATEGICO": "Mision Critica",
      "COBERTURATI": "Baja",
      "MADUREZ": "Repetible",
      "PRIORIDAD": "Alta"
    },
    {
      "CATEGORIA": "INVENTARIOS",
      "ITEM": "1.4",
      "CAPACIDADES": "Control de utilización de inventario por fecha de vencimiento",
      "DESCRIPCION": "",
      "ESTRATEGICO": "Negocio Critico",
      "COBERTURATI": "Suficiente",
      "MADUREZ": "Repetible",
      "PRIORIDAD": "Media"
    },
    {
      "CATEGORIA": "INVENTARIOS",
      "ITEM": "1.6",
      "CAPACIDADES": "Control Efectivo de Inventarios por lotes, con fechas de expiración",
      "DESCRIPCION": "Lotes para articulos ",
      "ESTRATEGICO": "Negocio Critico",
      "COBERTURATI": "Media",
      "MADUREZ": "Definido",
      "PRIORIDAD": "Alta"
    },
    {
      "CATEGORIA": "INVENTARIOS",
      "ITEM": "1.7",
      "CAPACIDADES": "Asegurar la confiabilidad del inventario mayor o igual a 95%",
      "DESCRIPCION": "Control por Inv Físico, Conteo cíclico, ",
      "ESTRATEGICO": "Operativo",
      "COBERTURATI": "Suficiente",
      "MADUREZ": "Repetible",
      "PRIORIDAD": "Media"
    },
    {
      "CATEGORIA": "INVENTARIOS",
      "ITEM": "1.8",
      "CAPACIDADES": "Responder agil y rápidamente cualquier requerimiento de Trazabilidad",
      "DESCRIPCION": "Lote/Serie, Atributos, Track/Trace, Consumos, Recepción, Despachos",
      "ESTRATEGICO": "Mision Critica",
      "COBERTURATI": "Suficiente",
      "MADUREZ": "Inicial",
      "PRIORIDAD": "Alta"
    },
    {
      "CATEGORIA": "INVENTARIOS",
      "ITEM": "1.9",
      "CAPACIDADES": "Identificar inequivocamente cuando, donde, quien efectuó transacciones de inventario",
      "DESCRIPCION": "Bitácora/Log Transacciones",
      "ESTRATEGICO": "Operativo",
      "COBERTURATI": "Suficiente",
      "MADUREZ": "Inicial",
      "PRIORIDAD": "Media"
    },
    {
      "CATEGORIA": "INGENIERIA",
      "ITEM": "2.1",
      "CAPACIDADES": "Definir formulaciones apropiadas para cada producto",
      "DESCRIPCION": "Batch, Cantidad por, Porcentaje por, Desperdicio, Vigencia, Operación, Sustituciones, coProductos",
      "ESTRATEGICO": "Negocio Critico",
      "COBERTURATI": "Ninguna",
      "MADUREZ": "Inicial",
      "PRIORIDAD": "Baja"
    },
    {
      "CATEGORIA": "INGENIERIA",
      "ITEM": "2.2",
      "CAPACIDADES": "Alternos",
      "DESCRIPCION": "Fórmula alterna, Fórmula por planta, ",
      "ESTRATEGICO": "Operativo",
      "COBERTURATI": "Ninguna",
      "MADUREZ": "Inicial",
      "PRIORIDAD": "Baja"
    },
    {
      "CATEGORIA": "INGENIERIA",
      "ITEM": "2.3",
      "CAPACIDADES": "Procesos Productivos",
      "DESCRIPCION": "Tasas de Producción por Línea/Centro de Trabajo, Tiempos de Alistamiento, Rendimiento, ",
      "ESTRATEGICO": "Operativo",
      "COBERTURATI": "Ninguna",
      "MADUREZ": "Inicial",
      "PRIORIDAD": "Baja"
    },
    {
      "CATEGORIA": "INGENIERIA",
      "ITEM": "2.4",
      "CAPACIDADES": "Control de materiales entregados/recibidos  a/de Contratistas y maquilas",
      "DESCRIPCION": "Operaciones Subcontratadas, Vigencia, Proveedor, Tarifa, tiempo de servicio",
      "ESTRATEGICO": "Mision Critica",
      "COBERTURATI": "Ninguna",
      "MADUREZ": "Inicial",
      "PRIORIDAD": "Baja"
    },
    {
      "CATEGORIA": "INGENIERIA",
      "ITEM": "2.5",
      "CAPACIDADES": "Evaluar maquilas/contratistas por aprovechamiento/tiempo/precios",
      "DESCRIPCION": "",
      "ESTRATEGICO": "Negocio Critico",
      "COBERTURATI": "Ninguna",
      "MADUREZ": "Inicial",
      "PRIORIDAD": "Baja"
    },
    {
      "CATEGORIA": "CALIDAD",
      "ITEM": "3.1",
      "CAPACIDADES": "Asegurar la divulgación y disponiblidad de las especificaciones que cumplen los artículos que se distribuyen",
      "DESCRIPCION": "Establecer las características a verificar, sus rangos de aceptación, los procedimientos aplicables e insumos requeridos",
      "ESTRATEGICO": "Operativo",
      "COBERTURATI": "Ninguna",
      "MADUREZ": "Inicial",
      "PRIORIDAD": "Baja"
    },
    {
      "CATEGORIA": "CALIDAD",
      "ITEM": "3.2",
      "CAPACIDADES": "Registrar y analizar los resultados de especificaciones de producto",
      "DESCRIPCION": "Orden para ejecutar la verficación de atributos para el lote del artículo, según las especificaciones y el procedimiento",
      "ESTRATEGICO": "Operativo",
      "COBERTURATI": "Ninguna",
      "MADUREZ": "Inicial",
      "PRIORIDAD": "Baja"
    },
    {
      "CATEGORIA": "CALIDAD",
      "ITEM": "3.3",
      "CAPACIDADES": "Cumplir con la especificación perseguida",
      "DESCRIPCION": "",
      "ESTRATEGICO": "Operativo",
      "COBERTURATI": "Ninguna",
      "MADUREZ": "Inicial",
      "PRIORIDAD": "Baja"
    },
    {
      "CATEGORIA": "COSTOS",
      "ITEM": "4.1",
      "CAPACIDADES": "Calcular costos estimados para articulos manufacturados",
      "DESCRIPCION": "Acumulación de costos de materiales, producción y fijos, sobre la ingeniería definida para tener un costo esperado u objetivo",
      "ESTRATEGICO": "Negocio Critico",
      "COBERTURATI": "Ninguna",
      "MADUREZ": "Inicial",
      "PRIORIDAD": "Baja"
    },
    {
      "CATEGORIA": "COSTOS",
      "ITEM": "3.2",
      "CAPACIDADES": "Calcular costos reales de producción",
      "DESCRIPCION": "Acumulación de costos en la operación, según consumo de materiales y uso de los recursos. ",
      "ESTRATEGICO": "Negocio Critico",
      "COBERTURATI": "Ninguna",
      "MADUREZ": "Inicial",
      "PRIORIDAD": "Baja"
    },
    {
      "CATEGORIA": "COSTOS",
      "ITEM": "3.3",
      "CAPACIDADES": "Simulación de Costos",
      "DESCRIPCION": "Trabajando sobre los Elementos de Costo (Materiales, Producción, Indirectos Variables, Subcontrato e Indirectos Fijos, revisar escenarios de ajuste y su efecto en el costo total",
      "ESTRATEGICO": "Negocio Critico",
      "COBERTURATI": "Ninguna",
      "MADUREZ": "Inicial",
      "PRIORIDAD": "Baja"
    },
    {
      "CATEGORIA": "COSTOS",
      "ITEM": "3.5",
      "CAPACIDADES": "Determinar oportunamente desviaciones significativas  en costos estimados vs reales",
      "DESCRIPCION": "",
      "ESTRATEGICO": "Negocio Critico",
      "COBERTURATI": "Ninguna",
      "MADUREZ": "Inicial",
      "PRIORIDAD": "Baja"
    },
    {
      "CATEGORIA": "PLANEACION",
      "ITEM": "4.1",
      "CAPACIDADES": "Planear cada articulo bajo diferentes criterios según el segmento de mercado, para asegurar un nivel de servicio al cliente",
      "DESCRIPCION": "Política, MPS, MRP, Modificadores, Lead Time, Inventario de Seguridad, Secuencias, ",
      "ESTRATEGICO": "Negocio Critico",
      "COBERTURATI": "Ninguna",
      "MADUREZ": "Inicial",
      "PRIORIDAD": "Baja"
    },
    {
      "CATEGORIA": "PLANEACION",
      "ITEM": "4.2",
      "CAPACIDADES": "Balanceo de oferta y Demanda para producto terminado",
      "DESCRIPCION": "MPS  (Esperada& Real) vs la Oferta (Inventario, Ordenes) según parámetros por localidad (Planta/Centro de distribución), ",
      "ESTRATEGICO": "Negocio Critico",
      "COBERTURATI": "Ninguna",
      "MADUREZ": "Inicial",
      "PRIORIDAD": "Baja"
    },
    {
      "CATEGORIA": "PLANEACION",
      "ITEM": "4.3",
      "CAPACIDADES": "***** sin capacidad *****",
      "DESCRIPCION": "Incluye Demanda Estacional, Inventario de Seguridad, Tiempo de Seguridad, ",
      "ESTRATEGICO": "Negocio Critico",
      "COBERTURATI": "Ninguna",
      "MADUREZ": "Inicial",
      "PRIORIDAD": "Baja"
    },
    {
      "CATEGORIA": "PLANEACION",
      "ITEM": "4.4",
      "CAPACIDADES": "Estimaciones de demanda futura por diferentes criterios",
      "DESCRIPCION": "Algoritmos estadísticos para proyectar la demanda esperada por artículo, cliente, agrupaciones, destinos; análisis 'Best Fit'",
      "ESTRATEGICO": "Operativo",
      "COBERTURATI": "Ninguna",
      "MADUREZ": "Inicial",
      "PRIORIDAD": "Baja"
    },
    {
      "CATEGORIA": "PLANEACION",
      "ITEM": "4.5",
      "CAPACIDADES": "Planeación de abastecimiento (compras y producción)",
      "DESCRIPCION": "Explosión de la ingeniería de materiales, para generar recomendaciones de compra ó de fabricación, según políticas y parámetros.",
      "ESTRATEGICO": "Operativo",
      "COBERTURATI": "Ninguna",
      "MADUREZ": "Inicial",
      "PRIORIDAD": "Baja"
    },
    {
      "CATEGORIA": "PLANEACION",
      "ITEM": "4.6",
      "CAPACIDADES": "Asegurar el abastecimiento de maquiladores con materias primas/componentes para atender la demanda",
      "DESCRIPCION": "Proyecta y resuelve flujos de Demanda y Oferta entre localidades (nodos), actualiza MPS",
      "ESTRATEGICO": "Negocio Critico",
      "COBERTURATI": "Ninguna",
      "MADUREZ": "Inicial",
      "PRIORIDAD": "Baja"
    },
    {
      "CATEGORIA": "PLANEACION",
      "ITEM": "4.7",
      "CAPACIDADES": "Anticipar la necesidad de contraer/extender la capacidad de los recursos de fabricación",
      "DESCRIPCION": "Evalúa la ocupación de centros de trabajo, según carga proyectada por órdenes del plan y en ejecución",
      "ESTRATEGICO": "Negocio Critico",
      "COBERTURATI": "Ninguna",
      "MADUREZ": "Inicial",
      "PRIORIDAD": "Baja"
    },
    {
      "CATEGORIA": "PLANEACION",
      "ITEM": "5.1",
      "CAPACIDADES": "Generar programas de producción ejectuables",
      "DESCRIPCION": "Secuenciación con Parámetros, Confirmación de Fecha, Cantidad (Split), Proceso alterno, para secuenciación interactiva y actualización del Plan de Producción",
      "ESTRATEGICO": "Operativo",
      "COBERTURATI": "Ninguna",
      "MADUREZ": "Inicial",
      "PRIORIDAD": "Baja"
    },
    {
      "CATEGORIA": "PLANEACION",
      "ITEM": "5.2",
      "CAPACIDADES": "Controlar Dosificaciones en producción",
      "DESCRIPCION": "Listas de Consumo para producción, Selección por Lote, Lista Verificada para cantidad",
      "ESTRATEGICO": "Operativo",
      "COBERTURATI": "Ninguna",
      "MADUREZ": "Inicial",
      "PRIORIDAD": "Baja"
    },
    {
      "CATEGORIA": "PLANEACION",
      "ITEM": "5.3",
      "CAPACIDADES": "Control de Ejecución: Avances, recursos utilizados, reprocesos, retrabajos",
      "DESCRIPCION": "Tiempo real de Alistamiento, Ejecución, Tiempos de paro/razón, Consumo real, Rechazos, Reprocesos",
      "ESTRATEGICO": "Operativo",
      "COBERTURATI": "Ninguna",
      "MADUREZ": "Inicial",
      "PRIORIDAD": "Baja"
    },
    {
      "CATEGORIA": "PLANEACION",
      "ITEM": "5.4",
      "CAPACIDADES": "Detección oportuna de no conformidades",
      "DESCRIPCION": "Verificación de características en el proceso productivo, según especificaciones y procedimiento documentados",
      "ESTRATEGICO": "Operativo",
      "COBERTURATI": "Ninguna",
      "MADUREZ": "Inicial",
      "PRIORIDAD": "Baja"
    },
    {
      "CATEGORIA": "PLANEACION",
      "ITEM": "5.5",
      "CAPACIDADES": "Cumplimiento metas control de costos",
      "DESCRIPCION": "Acumulación de costos, según acumulación de consumos y uso de los recursos, según reporte de ejecución",
      "ESTRATEGICO": "Operativo",
      "COBERTURATI": "Ninguna",
      "MADUREZ": "Inicial",
      "PRIORIDAD": "Baja"
    }
  ]
}