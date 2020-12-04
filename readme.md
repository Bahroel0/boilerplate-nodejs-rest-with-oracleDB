## Node REST API

### Description
This program build using express that connected with Oracle DB. This program use for controlling and processing data in database.


### Installation 

* Install library
```
$ npm install
```
* Setting Environment
<br />
  Oracle DB need env variable that call LD_LIBRARY_PATH. This environment value is path of Oracle Instant client. Open File /etc/environment and add this.

```
  LD_LIBRARY_PATH="<path of oracle instant client>"
```

* Run Application in dev mode
```
$ npm run dev
```

* Run Application using PM2 (for production)
```
$ pm2 start npm --no-automation --name "api" -- run start
```
* Check log to ensure application running without error
```
$ pm2 log api
```