import { MercadoPagoConfig, Preference } from 'mercadopago';

// Configuración del cliente
const client = new MercadoPagoConfig({
  accessToken: process.env.MERCADOPAGO_ACCESS_TOKEN,
});

export default async function handler(req, res) {
  try {
    // 1. Crea el objeto Preference
    const preference = new Preference(client);

    // 2. Define los datos de la preferencia
    const requestData = {
      body: {
        items: [
          {
            title: req.body.title || "Producto sin nombre",
            unit_price: Number(req.body.price) > 0 ? Number(req.body.price) : 1,
            quantity: Number(req.body.quantity) || 1,
          },
        ],
        back_urls: {
          success: "http://localhost:3000/success",
          failure: "http://localhost:3000/failure",
        },
        auto_return: "approved",
      },
    };

    // 3. Crea la preferencia
    const response = await preference.create(requestData);

    // 4. Devuelve el ID de la preferencia
    res.status(200).json({ id: response.id });

  } catch (error) {
    console.error("Error detallado:", JSON.stringify(error, null, 2));
    res.status(500).json({ 
      error: "Error al crear el pago",
      details: error.message 
    });
  }
}