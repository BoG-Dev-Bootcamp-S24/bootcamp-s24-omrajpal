export default async function handler(req, res) {
    try {
      const { name } = req.query;
      const response = await fetch(`https://pokeapi.co/api/v2/pokemon/${name}`);
      const data = await response.json();
      
  
      // Check if the data is valid
      if (data && data.id) {
        console.log('here')
        let id = data.id;
        const response = await fetch(`https://pokeapi.co/api/v2/evolution-chain/${id}`);
        const evoData = await response.json();

        if (evoData && evoData.chain.evolves_to[0].species.name) {
            res.status(200).json({
                next_evolution : evoData.chain.evolves_to[0].species.name
            });
        } else {
            res.status(200).json({
                next_evolution : evoData.chain.species.name
            });
        }
      } else {
        // Invalid data
        console.log('error')
        res.status(400).json({ error: 'Invalid data' });
      }
    } catch (error) {
      // Server error
      console.log(error);
      res.status(500).json({ error: 'Internal Server Error' });
    }
  }