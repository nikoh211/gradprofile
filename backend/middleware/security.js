const { limiter, helmet } = require('./middleware/security');
const apiKeyAuth = require('./middleware/auth');

app.use(helmet());
app.use(limiter);
app.use('/api', apiKeyAuth); 