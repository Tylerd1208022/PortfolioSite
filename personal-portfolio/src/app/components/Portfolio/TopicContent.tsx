
interface Project {
    projectTitle: string;
    projectDescription: string;
    projectImageFile: string;
    projectLink: string;
    imageSide: string
}
interface TopicData {
    title: string;
    description: string;
    skills: string;
    projects: Record<string,Project>;
}

type TopicData_t = Record<string,TopicData>

const TopicData: TopicData_t = {
    "HLP": {
        "title" : "High Level Programming",
        "description" : "The term 'High Level' programming refers to the use of languages, libraries, and frameworks that handle a large amount of complexity independently, allowing for shorter development times for complex projects. This, of course, does not come for free, as these resources often aren't able to truly optimize a solution, resulting in decreased performance. High level programming is best for developing complex applications, especially when development time is more important than optimizing performance",
        "skills" : "Python, PyTorch, AWS (RDS,S3,Lambda,API Gateway,EC2,Braket), JavaScript, Node.js/Express.js, React.js/Next.js, Swift/SwiftUI, Firebase (RTDB, Functions)",
        "projects" : {
            "EPT Pocket Trainer":{
                "projectTitle" : "EPT Pocket Trainer",
                "projectDescription" : "Using the iOS SwiftUI framework for front end UI design, and a combination of the cloud services from Google's Firebase and Apple's CloudKit for back end data storage and maniuplation, EPT Pocket Trainer offers iOS users the ability to track workouts and progress, as well as sharing this progress with friends through the online social platform EPTOnline. The UI is designed adhering to the MVVM architecture, providing a clean sepearation of operation and view code. Data storage is handled by leveraging the benefits of both relational and non relational databases: workout structure is inherently hierarchical, so a NoSQL database is best to optimize both storage and fetch latency, while the SQL database contains references to NoSQL objects for ease of text search, a function not supported by the Firebase NoSQL database. Additionally, cloud functions running on a Node.js server provide efficient delivery of notifications by listening for actions in the database.",
                "projectImageFile" : "PocketTrainer.png",
                "projectLink" : "https://apps.apple.com/us/app/ept-pocket-trainer/id1644441649",
                "imageSide" : "Left"
            },
            "project2": {
                "projectTitle" : "Stock Market Price Predictor",
                "projectDescription" : "Using PyTorch for learning, and Pandas for data processing, my team and I developed a model for making stock market predictions. The model was created using both MLPs, LSTMs, and CNNs to produce a prediction of direction for future movement. When trained on 5 years of stock data, it consistently outperformed the market, and in several instances identified the COVID-19 induced stock market crash of 2020 after only being trained on previous years.",
                "projectImageFile" : "StockPricePred.png",
                "projectLink" : "https://drive.google.com/file/d/113ckNR-kGgirAOjfC1qEDMr1pMyHnfKi/view?usp=sharing",
                "imageSide" : "Right"
            },
            "project3" : {
                "projectTitle" : "Quantum Error Models with AWS",
                "projectDescription" : "Using IBM's qiskit Python Library, my group and I developed a Jupyter Notebook in AWS Brakets to test the Aspent Rigetti M3 Quantum Computer, and its error rates for intra chiplet swaps vs cross chiplet swaps.",
                "projectImageFile" : "qiskit.png",
                "projectLink" : "https://github.com/Tylerd1208022/QuantumErrorModels",
                "imageSide" : "Left"
            },
            "project4" : {
                "projectTitle" : "Northwestern Textbook Hub",
                "projectDescription" : "Using AWS Lambda, RDS, and API Gateway, along with a simple Python client, I was able to create a web service that allowed users to access various academic resources for courses by searching the database. Other capabilities included requesting documents that weren't listed, viewing requests, and gaining score on a leaderboard for fulfilling requests of others users.",
                "projectImageFile" : "aws.png",
                "projectLink" : "https://github.com/Tylerd1208022/QuantumErrorModels",
                "imageSide" : "Right"
            },
            "project5" : {
                "projectTitle" : "This Website!",
                "projectDescription" : "This website was created using React/Next.js front end frameworks",
                "projectImageFile" : "react.png",
                "projectLink": "self",
                "imageSide" : "Left"
            }
        }
    },
    "LLP" : {
        "title" : "Low Level Programming",
        "description" : "Low level programming refers to the use of programming languages that allow for more complete control over the operation of the device. This control allows developers to fully optimize their solutions to reach peak efficiency, but development in these languages involves increased complexity",
        "skills" : "C/C++, CUDA/nSight, Embedded C, Microchip Studio, GDB, Java, ARM, x86",
        "projects" : {
            "project1" : {
                "projectTitle" : "Embedded Webcam Firmware",
                "projectDescription" : "Using Embedded C with Microchip studio, my partner and I were able to create working firmware for our ARM Cortex M4 MCU that properly detected WebSocket connections to our ESP32 Wifi Chip by communicating with USART, and when detected began capturing images with the onboard OV2640 camera. This camera captured images, and transfered them back to the MCU with I2C, which then used SPI to transfer the image data to the ESP32 for display on the website, where it was displayed on our website written in HTML, with JavaScript used to provide navigation features and update the user on the status of the camera",
                "projectImageFile" : "PCB.png",
                "projectLink" : "https://docs.google.com/document/d/1Yh7QAv9Xb1H22s-RdGoTwe4DqlzAZjD1ax9qkxcO5Ms/edit?usp=sharing",
                "imageSide" : "Left"
            },
            "project2" : {
                "projectTitle" : "ARM Space Shooter",
                "projectDescription" : "Using over 1,000 lines of ARMv7 on a SoC simulator, I created a working game, similar to galaga and space invaders, in which the player moves their 'ship' horizontally and fires missiles at enemies, that spawn and move in random intervals at the top of the screen. The game loop was infinite until the player was hit 3 times, allowing for both replayability and play for significant amounts of time, while properly handling resets, game states, and display creation",
                "projectImageFile" : "galaga.png",
                "projectLink":"",
                "imageSide":"Right"
            },
            "project3" : {
                "projectTitle": "SimpleDB",
                "projectDescription" : "Using Java and a provided SQL parser, I created a working, simple relational database capable of supporting queries in SQL containing filters, sorting, aggregate operations, and joins. This database was further improved by implementing transactions and a pessimistic locking system, along with deadlock detection to allow for multithreading when processing multiple queries at once, and providing accurate results to return from the queries.",
                "projectImageFile" : "dbicon.png",
                "projectLink" : "https://github.com/Tylerd1208022/databases",
                "imageSide" : "Left"
            },
            "project4" : {
                "projectTitle" : "VLSI Wire Length Minimizer",
                "projectDescription" : "Using C++, I created a program that optimized placements of various circuit components in a hypothetical VLSI system to minimize the amount of wire required to accurately connect all components. Due to the large size of the dataset, C++ was crucial for ensuring high enough performance to process the data in a reasonable amount of time. This solution won the class wide award for best solution in Comp_Eng 357: VLSI CAD.",
                "projectImageFile" : "cpp.png",
                "projectLink" : "",
                "imageSide" : "Right"
            }
        }
    },
    "HWE" : {
        "title" : "Hardware Engineering",
        "description" : "Regardless of the language, library, or programming paradigm, somehow a machine has to process data and instructions efficiently in order to get an outcome, and do something useful with that outcome. Hardware engineering is the design of electrical circuits, some of which are able to process complex data as well as being programmed. By working with the silicon directly, we can achieve performance gains that are impossible to achieve with software optimization alone.",
        "skills" : "Verilog/SystemVerilog, VHDL, UVM, ModelSim/QuestaSim, Quartus II, Cadence EDA Suite (Virtuoso, Genus, Xcelium), Synplify, EaglePCB,",
        "projects" : {
            "project1" : {
                "projectTitle" : "5 Stage Pipelined DLX Processor with 2 Level Cache Hierarchy",
                "projectDescription" : "Using Verilog and the Cadence EDA suite, my group and I created a working processor running the DLX ISA (similar to MIPS). This processor featured a 5 stage pipeline to improve execution times, as well as two separate L1 caches and a single shared L2 cache below memory. Once finished, it was verified by running several programs such as QuickSort and MergeSort. This was then synthesized with Cadence Genus for a clock frequency of 1.1GHz, and an area of 28k microns, far exceeding our specification requirements.",
                "projectImageFile" : "processor.png",
                "projectLink" : "https://docs.google.com/document/d/1AH9G2nXHurMg2jIxDEyvZVvn5OAuiQtu8U7-BF930Rk/edit?usp=sharing",
                "imageSide" : "Left"
            },
            "project2" : {
                "projectTitle" : "Webcam",
                "projectDescription" : "Using an ARM Cortex M4 MCU, ESP32 Wifi Chip, and an OV2640 Camera, my partner and I created a working webcam. In addition to the firmware, we also designed a PCB using EaglePCB, and soldered all our parts to this board. We also created a 3D enclosure in OnShape, and printed it for a finished, durable, user friendly product",
                "projectImageFile" : "PCB.png",
                "projectLink" : "https://docs.google.com/document/d/1Yh7QAv9Xb1H22s-RdGoTwe4DqlzAZjD1ax9qkxcO5Ms/edit?usp=sharing",
                "imageSide" : "Right"
            },
            "project3" : {
                "projectTitle" : "FPGA Tank Game",
                "projectDescription" : "Using Quartus II on an Altera Cyclone FPGA DevBoard, my partner and I created a 2 player arcade game involving two paddles(tanks) on either side of the screen that could be accelerated or deccelerated, in which players would fire missiles across the screen trying to hit the opposing tank. This was created using the two process FSM architecture in VHDL to manage game states. Inputs were taken from serial keyboards, and the game was displayed on a VGA screen, with additional display such as score and winner (once game was over) being displayed across several 7 segment LED displays and an LCD text display.",
                "projectImageFile" : "TankGame.png",
                "projectLink" : "https://docs.google.com/document/d/1-Zubl4kV4NRs2fvfVXhXStXts5ZsR8iNrxim4LOe23k/edit?usp=sharing",
                "imageSide" : "Left"
            },
            "project4" : {
                "projectTitle" : "Hybrid Consistency - Physical modelling",
                "projectDescription" : "As part of my work with PARAG@N Lab group, my team developed a system for classifying 4 cache line 'chunks' by how many processors share access across a program. Those that are only accessed by a single thread can afford to completely ignore TSO consistency, which increases performance. In order to do this, the TLB must be altered, and new Load/Store Queues must be created for the memory operations bypassing TSO. Using Cadence EDA tools and the Cacti simulator, I evaluated the costs in terms of area, power, and latency of expanding these existing structures to make sure they are small enough to justify the performance improvements they yield. This work has been submitted to ISCA'24 for publication.",
                "projectImageFile" : "Paragon.png",
                "projectLink" : "",
                "imageSide" : "Right"
            }
        }
    }
}
export default TopicData;