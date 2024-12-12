let worker = new Worker('worker.js');

worker.postMessage("Hellooooo!!!!");

Concurrency (single-core CPU)

---

|th1|
| |
|**_|_**
|th2|
\_**_|_**|
|th1|
|**_|_**
|th2|

    Concurrency  + Parallelism (multi-core CPU)

---

|th1|th2|
| |**_|
| |_**
|**\_|th2|
\_\_**|**_|
|th1|
| |
| |_**
| |th2|
