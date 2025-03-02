const path = require('path');

const WORKDIR = process.env.WORKDIR || '/tmp';
const tasmotaRepo = path.resolve(WORKDIR, 'Tasmota');
const githubRepo = 'https://github.com/arendst/Tasmota.git';
const minVersion = 'v12.0.0';
const maxVersion = 'v12.3.1';
const edgeBranch = 'development';
const userConfigOvewrite = path.resolve(tasmotaRepo, 'tasmota/user_config_override.h');
const userPlatformioOverrideIni = path.resolve(tasmotaRepo, 'platformio_override.ini');
const tasmotaVersionFile = path.resolve(tasmotaRepo, 'tasmota/tasmota_version.h');
const templatePlatformioIni = path.resolve(__dirname, '../compile/platformio.ini');
const tasmotaInoFile = path.resolve(tasmotaRepo, 'tasmota/tasmota.ino');
const listenPort = process.env.PORT || 3000;

module.exports = {
  tasmotaRepo,
  githubRepo,
  minVersion,
  maxVersion,
  edgeBranch,
  userConfigOvewrite,
  userPlatformioOverrideIni,
  tasmotaVersionFile,
  templatePlatformioIni,
  tasmotaInoFile,
  listenPort,
};
