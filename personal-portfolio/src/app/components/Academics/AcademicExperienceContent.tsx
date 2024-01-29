interface Class {
    courseName: string;
    courseId: string;
    description: string;
}

type ClassList = Record<string,Record<string,Class>>;

const ClassData: ClassList = {
    "High Level Programming" : {
        "Class1" : {
            "courseName" : "Full Stack Software Engineering",
            "courseId" : "COMP_SCI 396",
            "description" : "Full stack web design using front end frameworks like React.js/Next.js and Angular, as well as backend frameworks like Django and Spring Boot"
        },
        "Class2" : {
            "courseName" : "Scalable Software Architecture",
            "courseId" : "COMP_SCI 310",
            "description" : "Back end web development with Node.js/Express.js, Python, and AWS services such as Lambda, API Gateway, RDS, S3, and EC2"
        },
        "Class3" : {
            "courseName" : "Machine Learning: Foundations, Applications, and Algorithms",
            "courseId" : "ELEC_ENG 375",
            "description" : "Machine Learning strategies and algorithms written completely from scratch"
        },
        "Class3.5" : {
            "courseName" : "Deep Learning",
            "courseId" : "COMP_SCI 449",
            "description" : "PyTorch, Deep Learning Models such as GAN, LSTM, CNN, Transformers"
        },
        "Class4" : {
            "courseName" : "Intro to Databases",
            "courseId" : "COMP_SCI 339",
            "description" : "Advanced SQL queries, database and DBMS design, concurrency management and large scale project design with Java"
        }
    },
    "Low Level Programming" : {
        "Class1" : {
            "courseName" : "Fundamentals of Comptuter Programming II",
            "courseId" : "COMP_SCI 211",
            "description" : "Object Oriented Programming with C and C++"
        },
        "Class2" : {
            "courseName" : "Fundamentals of Computer Software",
            "courseId" : "COMP_SCI 205",
            "description" : "ARMv7 Programming"
        },
        "Class3" : {
            "courseName" : "Programming Massively Paralell Architectures with CUDA",
            "courseId" : "COMP_ENG 368",
            "description" : "GPU Architecture, CUDA, parallelization optimizations such as Tiling and Reduction"
        },
        "Class4" : {
            "courseName" : "Electronic System Design",
            "courseId" : "ELEC_ENG 326",
            "description" : "Soldering, PCB design, Firmware Design, Embedded C, Serial Protocols (SPI/USART/I2C), HTML/CSS/JavaScript"
        },
        "Class5" : {
            "courseName" : "VLSI Algorithmics",
            "courseId" : "COMP_ENG 459",
            "description" : "High Level Synthesis, Synthesizable C programming"
        }
    },
    "Hardware Engineering" : {
        "Class1" : {
            "courseName" : "Computer Architecture",
            "courseId" : "COMP_ENG 361",
            "description" : "CPU Design methodology, caches, pipelines, and HDL implementations"
        },
        "Class2" : {
            "courseName" : "Computer Architecture Project",
            "courseId" : "COMP_ENG 362",
            "description" : "Design of DLX Processor Capstone Project, team level HDL design and verification"
        },
        "Class3" : {
            "courseName" : "CMOS VLSI Circuits Design",
            "courseId" : "COMP_ENG 391",
            "description" : "CMOS Circuit physics, Cadence Virtuoso Cell Design, Simulation"
        },
        "Class4" : {
            "courseName" : "Advanced Computer Architecture",
            "courseId" : "COMP_ENG 452",
            "description" : "OoO processor design, CPU optimizations such as branch predictors and pre fetchers"
        },
        "Class5" : {
            "courseName" : "Parallel Architectures",
            "courseId" : "COMP_ENG 453",
            "description" : "Hardware structures to enable concurrency such as cache coherence protocols and memory consistency models"
        },
        "Class6" : {
            "courseName" : "Modern Topics in Computer Architecture",
            "courseId" : "COMP_ENG 456",
            "description" : "Advanced memory consistency models, methods for compiler optimization of SIMD, photonics, quantum computing"
        },
        "Class7" : {
            "courseName" : "FPGA/ASIC Design",
            "courseId" : "COMP_ENG 355",
            "description" : "Design and Verification for FPGAs, VHDL , two process FSM architecture, FPGA devboard system design"
        },
        "Class8" : {
            "courseName" : "Real Time Digital Systems Design and Verification with FPGAs",
            "courseId" : "COMP_ENG 387",
            "description" : "Streaming Architectures, signal processing, UVM, SystemVerilog, UVM"
        },
    },
}
export default ClassData;