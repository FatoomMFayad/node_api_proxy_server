const express = require('express');
const cors = require('cors');

const PORT = process.env.PORT || 5000;

const app = express();

app.listen(PORT, () => console.log(`Server running on port ${PORT}`));