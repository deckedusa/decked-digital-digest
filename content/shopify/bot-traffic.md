# Bot Traffic


## Exluding bots from HEAP

Heap can be configured to exclude bot traffic from analytics based on IP's. This is a bit of a pain to do but it is a necessary step to get accurate analytics. This list is under `Account > Manage > Exclude IPs`.

### Initial List

DECKED Office:
- `66.210.45.114`

Google Bots:
- `64.233.*` - Google services (Gmail, APIs, etc.)
- `74.125.*` - Core Google infrastructure
- `66.102.*` - Google services
- `72.14.*` - Google infrastructure
- `209.85.*` - Google services

Twitter Bot:
- `104.244.*`

Random Bots:
- `146.75.164.0`
- `40.64.64.90`

Full List:
```
66.210.45.114
64.233.*
74.125.*
66.102.*
72.14.*
209.85.*
104.244.*
146.75.164.0
40.64.64.90
```