const NodeMediaServer = require('node-media-server');
const express = require('express');
const cors = require('cors');
const path = require('path');
const app = express();
app.use(cors());
app.use(express.static(path.join(__dirname, 'public')));

const config = {
  rtmp: {
    port: 1935,
    chunk_size: 60000,
    gop_cache: true,
    ping: 30,
    ping_timeout: 60
  },
  http: {
    port: 8000,
    allow_origin: '*',
    mediaroot: './media'
  }
};

const nms = new NodeMediaServer(config);
nms.run();

app.get('/', (req, res) => {
  res.sendFile(path.join(__dirname, 'public', 'index.html'));
});

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => {
  console.log(`Express server is running on port ${PORT}`);
  console.log(`RTMP server is running on port 1935`);
  console.log(`HTTP server is running on port 8000`);
});
