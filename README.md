## Octagonal Wheels

Quod opus sit...

This module is a compilation of wheels that have been reinvented for a __specific purpose__.

Specific purposes are, for example
- In certain environments...
  - to specialise in speed
  - to specialise in memory usage
- To reduce dependencies
- To assist in achieving the above objectives efficiently.

Mainly targeted to browsers, Electron Apps, and, Chrome Extensions.

Please keep in mind that all things do not have a generic purpose.

## Documentation

TypeDoc Documentation is [here](./docs/globals.md)
[![Ask DeepWiki](https://deepwiki.com/badge.svg)](https://deepwiki.com/vrtmrz/octagonal-wheels) also quite useful!

## Current Coverage
```
------------------------------|---------|----------|---------|---------|-------------------------------------------------------------------------------
File                          | % Stmts | % Branch | % Funcs | % Lines | Uncovered Line #s                                                             
------------------------------|---------|----------|---------|---------|-------------------------------------------------------------------------------
All files                     |   76.92 |    64.44 |   76.08 |   77.79 |                                                                               
 src                          |   95.56 |    84.44 |   96.92 |   96.77 |                                                                               
  actor.ts                    |     100 |    90.32 |     100 |     100 | 56-58,190                                                                     
  collection.ts               |     100 |      100 |     100 |     100 |                                                                               
  context.ts                  |     100 |      100 |     100 |     100 |                                                                               
  function.ts                 |     100 |      100 |     100 |     100 |                                                                               
  number.ts                   |     100 |      100 |     100 |     100 |                                                                               
  object.ts                   |      95 |    80.76 |     100 |      95 | 35                                                                            
  promises.ts                 |   91.13 |       80 |   93.33 |   94.11 | 49-53                                                                         
  string.ts                   |   91.66 |       75 |     100 |    90.9 | 15                                                                            
 src/binary                   |   80.95 |    68.67 |   82.35 |   81.86 |                                                                               
  base64.ts                   |   96.24 |    84.31 |     100 |   96.66 | 58,184,238,247                                                                
  encodedUTF16.ts             |    40.9 |       25 |      50 |    42.1 | 23-85                                                                         
  hex.ts                      |     100 |      100 |     100 |     100 |                                                                               
  index.ts                    |     100 |      100 |     100 |     100 |                                                                               
 src/bureau                   |   90.73 |    77.05 |   91.34 |   90.81 |                                                                               
  Clerk.ts                    |   89.44 |    69.33 |   87.75 |   89.65 | 124-126,132-133,139,232,271,315-329,398,400,459                               
  Inbox.ts                    |   95.48 |    94.82 |     100 |   95.48 | 91-92,197,212,283,332                                                         
  PaceMaker.ts                |   81.81 |    72.72 |      75 |   80.95 | 15-17,60                                                                      
  SlipBoard.ts                |    87.5 |    61.53 |   94.11 |   86.95 | 108-112,229-231                                                               
 src/common                   |   66.03 |    43.47 |      30 |   66.03 |                                                                               
  const.ts                    |     100 |      100 |     100 |     100 |                                                                               
  logger.ts                   |   68.08 |    42.85 |    37.5 |   68.08 | 52,54,56,58,64,90-128                                                         
  polyfill.ts                 |      25 |       50 |       0 |      25 | 14-19                                                                         
 src/concurrency              |   43.61 |       34 |   44.18 |   43.97 |                                                                               
  lock_v1.ts                  |       0 |        0 |       0 |       0 | 20-178                                                                        
  lock_v2.ts                  |   92.68 |    91.66 |     100 |    92.2 | 46,99-102,126,153                                                             
  processor_v1.ts             |       0 |        0 |       0 |       0 | 17-532                                                                        
  processor_v2.ts             |   65.24 |    53.29 |    67.6 |   68.11 | ...95,440-450,457,473-476,488,512-514,517-519,545-546,570-571,581-584,594-618 
  semaphore_v1.ts             |       0 |        0 |       0 |       0 | 2-137                                                                         
  semaphore_v2.ts             |   91.66 |       80 |   91.66 |   90.32 | 27-29                                                                         
  task.ts                     |   83.01 |    70.73 |      70 |   82.97 | 17,21,26,110,168-181,219-225                                                  
 src/conduit                  |   98.97 |    96.52 |     100 |   98.95 |                                                                               
  NamedInstance.ts            |     100 |      100 |     100 |     100 |                                                                               
  connector.ts                |     100 |      100 |     100 |     100 |                                                                               
  manifold.ts                 |     100 |      100 |     100 |     100 |                                                                               
  regulator.ts                |     100 |      100 |     100 |     100 |                                                                               
  transporter.ts              |     100 |    94.28 |     100 |     100 | 133,173                                                                       
  transporterAdapter.ts       |   93.84 |    91.66 |     100 |   93.75 | 80-81,169-170                                                                 
 src/databases                |   94.64 |    84.61 |     100 |   95.83 |                                                                               
  KeyValueDB.ts               |      90 |       50 |     100 |      90 | 62-63                                                                         
  SimpleStoreIDB.ts           |   97.22 |     87.5 |     100 |     100 | 45-47,64                                                                      
 src/dataobject               |   78.71 |    74.72 |      72 |   79.56 |                                                                               
  PersistentMap.ts            |   81.57 |    63.63 |   83.33 |   85.71 | 33-35,43-44                                                                   
  Refiner.ts                  |     100 |      100 |     100 |     100 |                                                                               
  reactive_v1.ts              |       0 |        0 |       0 |       0 | 36-140                                                                        
  reactive_v2.ts              |   97.59 |    79.41 |   96.29 |   97.33 | 111,160                                                                       
 src/encryption               |   96.38 |    90.62 |     100 |   96.35 |                                                                               
  encryption.ts               |   96.25 |     90.9 |     100 |    96.2 | 327-328,346-347,355-356                                                       
  encryptionv3.ts             |   97.77 |    83.33 |     100 |   97.77 | 35                                                                            
  hkdf.ts                     |   93.84 |    83.33 |     100 |   93.84 | 265,271-273                                                                   
  obfuscatePath.ts            |     100 |      100 |     100 |     100 |                                                                               
  obfuscatePathV2.ts          |     100 |      100 |     100 |     100 |                                                                               
 src/encryption/asymmetric    |     100 |      100 |     100 |     100 |                                                                               
  asymmetric.ts               |     100 |      100 |     100 |     100 |                                                                               
  asymmetricHelper.ts         |     100 |      100 |     100 |     100 |                                                                               
  common.ts                   |     100 |      100 |     100 |     100 |                                                                               
  keys.ts                     |     100 |      100 |     100 |     100 |                                                                               
 src/encryption/openSSLCompat |     100 |    44.44 |     100 |     100 |                                                                               
  CBC.ts                      |     100 |    44.44 |     100 |     100 | 42-118                                                                        
 src/events                   |      90 |    68.51 |   88.46 |   89.33 |                                                                               
  CustomEventTargets.ts       |   74.07 |    81.25 |   57.14 |   74.07 | 22,56,65,70-75                                                                
  EventHub.ts                 |   98.11 |    63.15 |     100 |   97.91 | 68                                                                            
 src/hash                     |   53.38 |    63.63 |   57.14 |   55.04 |                                                                               
  crc32.ts                    |       0 |        0 |       0 |       0 | 1-66                                                                          
  purejs.ts                   |     100 |      100 |     100 |     100 |                                                                               
  xxhash.ts                   |   72.22 |      100 |      50 |   81.25 | 19-21                                                                         
 src/iterable                 |   85.63 |    72.91 |   86.11 |   85.45 |                                                                               
  chunks.ts                   |   97.36 |    93.75 |     100 |   97.14 | 79                                                                            
  map.ts                      |   86.95 |       75 |   88.88 |   86.66 | 67-68,102-104,107                                                             
  source.ts                   |      80 |    60.71 |      80 |      80 | 12-13,44,54-57,66-70,81-89,124-125,135-138,149                                
 src/memory                   |   85.97 |    69.11 |      85 |   86.45 |                                                                               
  LRUCache.ts                 |     100 |    65.21 |     100 |     100 | 23-92,97-99                                                                   
  memo.ts                     |     100 |    77.77 |     100 |     100 | 18-20,47,58                                                                   
  memutil.ts                  |      77 |    66.66 |   79.31 |   77.89 | 13-14,65,149-184,291                                                          
 src/messagepassing           |       0 |        0 |       0 |       0 |                                                                               
  signal_v1.ts                |       0 |        0 |       0 |       0 | 6-65                                                                          
------------------------------|---------|----------|---------|---------|-------------------------------------------------------------------------------
```