import Page from './PageInterface.tsx';

type BuilderData_t = Record<string,Record<string,Page>>;

const BuilderData: BuilderData_t = {
    "1: Choose your rock" : {
        "Intro" : {
            "prompt" : "The first step in the process is to choose the right material for the job. Designing the components that allow for computer engineering requires the work of material scientists, electrical engineers, and physicists",
            "answers" : {},
            "correctAnswer" : "12",
            "correctPrompt" : ""
        },
        "1" : {
            "prompt" : "Electricity is the basis for all computation. We'll need a good handle on how the electromagnetic force works for this! Which particle does not carry an electric charge?",
            "answers" : {
                "1" : "Proton",
                "2" : "Neutron",
                "3" : "Electron",
                "4" : "Positron"
            },
            "correctAnswer" : "2",
            "correctPrompt" : "Neutrons carry no charge. We have three candidates for our target particle. We're looking for something that we can manipulate easily to do our computations"
        },
        "2" : {
            "prompt" : "Lets narrow it down more - one of these is significantly heavier than the others - not ideal for transferring around quickly",
            "answers" : {
                "1" : "Proton",
                "2" : "Electron",
                "3" : "Positron",
            },
            "correctAnswer" : "1",
            "correctPrompt" : "Yes! Protons are far too heavy! Now its time to pick a winner!"
        },
        "3" : {
            "prompt" : "Only one of these is feasible, we accidentally let antimatter get into our pool! Which of the following isn't an anti particle",
            "answers" : {
                "1" : "Electron",
                "2" : "Positron",
                "3" : "",
                "4" : ""
            },
            "correctAnswer" : "1",
            "correctPrompt" : "Electrons are the primary carriers of the Electromagnetic force in electronic devices. Lets learn more about how to use them"
        },
        "4" : {
            "prompt" : "When electrons flow, we we call that flow a:",
            "answers" : {
                "1" : "Current",
                "2" : "Voltage",
                "3" : "Resistance",
                "4" : "Capacitance"
            },
            "correctAnswer" : "1",
            "correctPrompt" : "Correct! Current refers to the transfer of charge over time - speed for electrons"
        },
        "5" : {
            "prompt" : "When electrons are prevented from travelling at maximum speeds, generating heat, they experience:",
            "answers" : {
                "1" : "Current",
                "2" : "Voltage",
                "3" : "Resistance",
                "4" : "Capacitance"
            },
            "correctAnswer" : "3",
            "correctPrompt" : "Correct! Resistance causes heat production, and increased resistance decreases current, all else equal"
        },
        "6" : {
            "prompt" : "When there is a difference in the amount of charge between two regions, the difference is called a:",
            "answers" : {
                "1" : "Current",
                "2" : "Voltage",
                "3" : "Resistance",
                "4" : "Capacitance"
            },
            "correctAnswer" : "2",
            "correctPrompt" : "Correct! Voltage measures the difference in electric potential between two regions. Think of it as 'The amount the electrons in the higher region want to go to the lower region'"
        },
        "7" : {
            "prompt" : "A material with a low resistance that transfers current well is a(n):",
            "answers" : {
                "1" : "Insulator",
                "2" : "Conductor",
                "3" : "Semiconductor",
                "4" : "Wire"
            },
            "correctAnswer" : "2",
            "correctPrompt" : "Correct! Conductors like copper efficiently transfer charge without significant loss to heat energy"
        },
        "8" : {
            "prompt" : "A material with a high resistance that doesn't allow any current to flow is a(n)",
            "answers" : {
                "1" : "Insulator",
                "2" : "Conductor",
                "3" : "Semiconductor",
                "4" : "Wire"
            },
            "correctAnswer" : "1",
            "correctPrompt" : "Correct! Insulators like rubber or metal oxides prevent any current from flowing"
        },
        "9" : {
            "prompt" : "A material with moderate ability to allow current flow is a:",
            "answers" : {
                "1" : "Insulator",
                "2" : "Conductor",
                "3" : "Semiconductor",
                "4" : "Wire"
            },
            "correctAnswer" : "3",
            "correctPrompt" : "Correct! Semiconductors are vital to computing, as they allow for interesting circuit design!"
        },
        "10" : {
            "prompt" : "The most commonly used semiconductor in computing is:",
            "answers" : {
                "1" : "Carbon",
                "2" : "Silicon",
                "3" : "Germanium",
                "4" : "Tin"
            },
            "correctAnswer" : "2",
            "correctPrompt" : "Correct! Silicon has the perfect properties for a semiconductor, and its really abundant!"
        },
        "11" : {
            "prompt" : "Semiconductors, conductors, and insulators can be cleverly arranged to create ______, the device that allow computers to function",
            "answers" : {
                "1" : "Resistor",
                "2" : "Capacitor",
                "3" : "Transistor",
                "4" : "Inductor"
            },
            "correctAnswer" : "3",
            "correctPrompt" : "Correct! The transistor is the heart of computing. Modern chips contain billions to trillions!"
        },
        "12" : {
            "prompt" : "A transistor functions like a:",
            "answers" : {
                "1" : "Voltage Adder",
                "2" : "Charge Pump",
                "3" : "Single bit computer",
                "4" : "Configurable Switch"
            },
            "correctAnswer" : "4",
            "correctPrompt" : "Correct! A transistor has three ports (technically 4, but we're less concerned about the 4th). Transistors conduct from one port to another depending on the voltage at the third."
        },
        "End" : {
            "prompt" : "You've just discovered the transistor: a clever design of metal oxide, metal, and semiconductor that allows for voltage based switching. View the next module to see how we can leverage this into actual processing",
            "answers" : {},
            "correctAnswer" : "",
            "correctPrompt" : ""
        }
    },
    "2: Make it Think" : {
        "Intro" : {
            "prompt" : "Now that we've discovered transistors, we can combine them to process information. Lets learn some basic combinational logic!",
            "answers" : {},
            "correctAnswer" : "17",
            "correctPrompt" : ""
        },
        "1" : {
            "prompt" : "Our colloquial number system uses a 'decimal' system because it is base 10, or we count 10 digits before adding a new place. Binary uses a base of:",
            "answers" : {
                "1" : "2",
                "2" : "8",
                "3" : "16",
                "4" : "32"
            },
            "correctAnswer" : "1",
            "correctPrompt" : "Correct: Binary only uses two digits: 0, and 1. Instead of 0 1 2 3, we count 0 1 10 11"
        },
        "2" : {
            "prompt" : "Now its time to tie together physics and computer science. We can represent a 0 with:",
            "answers" : {
                "1" : "High Current",
                "2" : "Low Current",
                "3" : "High Voltage",
                "4" : "Low Voltage"
            },
            "correctAnswer" : "4",
            "correctPrompt" : "Correct! Transistors are variably conductive based on input voltage - not current. It makes the most sense to make a binary '0' = 0V or ground (GND)"
        },
        "3" : {
            "prompt" : "Now its time to tie together physics and computer science. We can represent a 1 with:",
            "answers" : {
                "1" : "High Current",
                "2" : "Low Current",
                "3" : "High Voltage",
                "4" : "Low Voltage"
            },
            "correctAnswer" : "3",
            "correctPrompt" : "Correct! Typically we decide a 'threshold' voltage to be 1, such as all V > 0.8V represents 1"
        },
        "4" : {
            "prompt" : "We need two types of transistors. our first type, the NMOS transistor, conducts when it recieves a logic __",
            "answers" : {
                "1" : "1",
                "2" : "0"
            },
            "correctAnswer" : "1",
            "correctPrompt" : "Correct! NMOS transistors create half of a CMOS circuit, the pulldown network. NMOS transistors, when given high gate voltage pull their output to ground (logic 0)"
        },
        "5" : {
            "prompt" : "We need two types of transistors. our second type, the PMOS transistor, conducts when it recieves a logic __",
            "answers" : {
                "1" : "1",
                "2" : "0"
            },
            "correctAnswer" : "2",
            "correctPrompt" : "Correct! PMOS transistors create the other half of a CMOS circuit, the pull up network. PMOS transistors, when given low gate voltage pull their output to Vdd (logic 1)"
        },
        "6" : {
            "prompt" : "CMOSFET (Complimentary Metal Oxide Semiconductor Field Effect Transistor) circuits are the basis for modern computing. How are they generally connected?",
            "answers" : {
                "1" : "PMOS connects ground and output, NMOS connects Vdd and output",
                "2" : "NMOS connects ground and output, PMOS connects Vdd and output",
                "3" : "PMOS connects ground and output, NMOS connects Vdd and output, inputs to gates",
                "4" : "NMOS connects ground and output, PMOS connects Vdd and output, inputs to gates"
            },
            "correctAnswer" : "4",
            "correctPrompt" : "Correct! You may ask, why both? The combination guaruntees only one side connects - pull down or pull up - so we can drive output up OR down without ever connecting ground and Vdd (creating a short, frying our computer)"
        },
        "7" : {
            "prompt" : "If we connect a single PMOS and NMOS as described in the previous question, and provide a logic '1' to both, what will the output yield?",
            "answers" : {
                "1" : "0",
                "2" : "1"
            },
            "correctAnswer" : "1",
            "correctPrompt" : "Correct! This is an inverter gate! The NMOS conducts, not the PMOS, and ground is connected to output giving a 0!"
        },
        "8" : {
            "prompt" : "If we connect two NMOS transistors, A and B, with inputs Ai and Bi, in series (one feeds into another), what combination of Ain, Bin would allow for conduction?",
            "answers" : {
                "1" : "Ai = 0, Bi = 0",
                "2" : "Ai = 1, Bi = 0",
                "3" : "Ai = 0, Bi = 1",
                "4" : "Ai = 1, Bi = 1"
            },
            "correctAnswer" : "4",
            "correctPrompt" : "Correct! If two transistors are in series (one after another) they both must conduct to close the bridge between ground and output"
        },
        "9" : {
            "prompt" : "If we connect two PMOS transistors, A and B, with inputs Ai and Bi, in parallel next to eachother, what combination of Ain, Bin would allow for conduction?",
            "answers" : {
                "1" : "Ai = 0, Bi = 0",
                "2" : "Ai = 1, Bi = 0",
                "3" : "Ai = 0, Bi = 1",
                "4" : "All of the above"
            },
            "correctAnswer" : "4",
            "correctPrompt" : "Correct! If two transistors are in parallel (sources and drains are connected to the same lines) either can conduct to close the bridge between ground and output. Hint: notice how the answers to the last two questions are mutually exclusive?"
        },
        "10" : {
            "prompt" : "If we combine series NMOS (provides 0 when both inputs are 1) and PMOS in parallel (provides 1 otherwise) we create a ____ gate",
            "answers" : {
                "1" : "AND",
                "2" : "NAND",
                "3" : "OR",
                "4" : "NOR"
            },
            "correctAnswer" : "4",
            "correctPrompt" : "Correct! The NOR (not OR) function returns 1 if and only if neither input (A NOR B) are 1"
        },
        "11" : {
            "prompt" : "Using similar pairings of PMOS/NMOS in series or parallel, we can create the NAND gate, which provides 1:",
            "answers" : {
                "1" : "When either A or B but not both are 1",
                "2" : "When both A and B are 1",
                "3" : "When A and B are not 1",
                "4" : "Always"
            },
            "correctAnswer" : "3",
            "correctPrompt" : "Correct! NAND means Not AND, AND means both A AND B, NAND conducts when A AND B are not 1"
        },
        "12" : {
            "prompt" : "Combining our inverter and NAND from before, we can make AND, which conducts:",
            "answers" : {
                "1" : "When either A or B but not both are 1",
                "2" : "When both A and B are 1",
                "3" : "When A and B are not 1",
                "4" : "Always"
            },
            "correctAnswer" : "2",
            "correctPrompt" : "Correct! AND has the opposite result as NAND"
        },
        "13" : {
            "prompt" : "Using a few AND/OR gates, we can make the XOR, exclusive or, which is true when:",
            "answers" : {
                "1" : "When either A or B but not both are 1",
                "2" : "When both A and B are 1",
                "3" : "When A and B are not 1",
                "4" : "Always"
            },
            "correctAnswer" : "1",
            "correctPrompt" : "Correct! XOR is incredibly useful for things like comparison and addition."
        },
        "14" : {
            "prompt" : "Using a combination of of gates, we can make the MUX (Multiplexor) which:",
            "answers" : {
                "1" : "Takes two values, and outputs one of them based on a third input",
                "2" : "Computes the sum of two inputs based on the combination of the two values",
                "3" : "Parses data into a more sparse format so its individual tokens can be used",
                "4" : "Parses data into a more compact format"
            },
            "correctAnswer" : "1",
            "correctPrompt" : "Correct! Multiplexors are a hardware If/Else block"
        },
        "15" : {
            "prompt" : "Using a combination of of gates, we can make the Decoder which:",
            "answers" : {
                "1" : "Takes two values, and outputs one of them based on a third input",
                "2" : "Computes the sum of two inputs based on the combination of the two values",
                "3" : "Parses data into a more sparse format so its individual tokens can be used",
                "4" : "Parses data into a more compact format"
            },
            "correctAnswer" : "3",
            "correctPrompt" : "Correct! Decoders can be used to tell our CPU what operations to do based on the instruction it reads from our program"
        },
        "16" : {
            "prompt" : "Using a combination of of gates, we can make the Encoder which:",
            "answers" : {
                "1" : "Takes two values, and outputs one of them based on a third input",
                "2" : "Computes the sum of two inputs based on the combination of the two values",
                "3" : "Parses data into a more sparse format so its individual tokens can be used",
                "4" : "Parses data into a more compact format"
            },
            "correctAnswer" : "4",
            "correctPrompt" : "Correct! Encoders can be useful for compressing data"
        },
        "17" : {
            "prompt" : "Using a combination of of gates, we can make the Adder which:",
            "answers" : {
                "1" : "Takes two values, and outputs one of them based on a third input",
                "2" : "Computes the sum of two inputs based on the combination of the two values",
                "3" : "Parses data into a more sparse format so its individual tokens can be used",
                "4" : "Parses data into a more compact format"
            },
            "correctAnswer" : "2",
            "correctPrompt" : "Correct! Addition only depends on our inputs, so cleverly chaining gates can lead to binary addition."
        },
        "End" : {
            "prompt" : "We have now used transistors to create devices that can read data, use the data to make decisions, and even do basic math. This is great, but to build a processor, we need more than just thinking. Look into the next module to learn how computers remember things for next time",
            "answers" : {
            },
            "correctAnswer" : "",
            "correctPrompt" : ""
        },
    },
    "3: Make it Remember" : {
        "Intro" : {
            "prompt" : "To do useful things, our computer needs to perform operations on past data, and store results for later. This module explores the systems for implementing this storage",
            "answers" : {},
            "correctAnswer" : "10",
            "correctPrompt" : ""
        },
        "1" : {
            "prompt" : "The D Flip Flop is the first sequential device to discuss. This object stores data that can be updated:",
            "answers" : {
                "1" : "Constantly",
                "2" : "At a specific point in time"
            },
            "correctAnswer" : "2",
            "correctPrompt" : "Correct! A D flip flop contains a port that allows it to update"
        },
        "2" : {
            "prompt" : "The D Flip Flop Update signal is delivered by a:",
            "answers" : {
                "1" : "Button press",
                "2" : "Condition being met",
                "3" : "Clock"
            },
            "correctAnswer" : "3",
            "correctPrompt" : "Correct! A Clock pulse regularly propogates through a system, allowing all flip flops to update"
        },
        "3" : {
            "prompt" : "The other sequential device we'll need is the an SRAM, which compares to the DFF in that it is:",
            "answers" : {
                "1" : "Slower, more power efficient",
                "2" : "Slower, less power efficient",
                "3" : "Faster, more power efficient",
                "4" : "Faster, less power efficient"
            },
            "correctAnswer" : "1",
            "correctPrompt" : "Correct! An SRAM takes a bit longer to access, but its better at storing data in terms of power"
        },
        "4" : {
            "prompt" : "Generally, the closer data is to the CPU,",
            "answers" : {
                "1" : "The more area it takes up on the chip",
                "2" : "The more the signals interfere with computation",
                "3" : "The faster it can be accessed",
                "4" : "The slower it can be accessed"
            },
            "correctAnswer" : "3",
            "correctPrompt" : "Correct! Closer data travels faster! It really does matter to - modern CPUs have clock periods in the picoseconds - it takes noticable time at that scale for those signals to travel"
        },
        "5" : {
            "prompt" : "Generally, the bigger a memory block is,",
            "answers" : {
                "1" : "The more area it takes up on the chip",
                "2" : "The more the signals interfere with computation",
                "3" : "The faster it can be accessed",
                "4" : "The slower it can be accessed"
            },
            "correctAnswer" : "4",
            "correctPrompt" : "Correct! Larger memory takes more time to get the requested data from the block"
        },
        "6" : {
            "prompt" : "The closest memory block to the CPU is the register file. It makes sense to use ____ to make it",
            "answers" : {
                "1" : "SRAM",
                "2" : "DFFs"
            },
            "correctAnswer" : "2",
            "correctPrompt" : "Correct! DFFs are faster. We want our data were using right now to be quick to access"
        },
        "7" : {
            "prompt" : "The register file is generally the:",
            "answers" : {
                "1" : "Most energy efficient",
                "2" : "Largest",
                "3" : "Smallest"
            },
            "correctAnswer" : "3",
            "correctPrompt" : "Correct! This further increases performance. Registers can be accessed within a single clock cycle"
        },
        "8" : {
            "prompt" : "The next storage unit is the Cache. The cache is a middle ground between memory and the CPU. It is somewhat of a hybrid because:",
            "answers" : {
                "1" : "They are made of DFFs, but far from the CPU",
                "2" : "They are made of DFFs, but close to the CPU",
                "3" : "They are made of SRAM, but far from the CPU",
                "4" : "They are made of SRAM, but close to the CPU"
            },
            "correctAnswer" : "4",
            "correctPrompt" : "Correct! Its faster than memory because its closer and smaller, but made with SRAMs because it stores far more data and needs to be energy efficient. Caches can be accessed within only a few cycles."
        },
        "9" : {
            "prompt" : "Memory is the:",
            "answers" : {
                "1" : "Furthest from the CPU, slowest",
                "2" : "Furthest from the CPU, biggest",
                "3" : "Furthest from the CPU, fastest",
                "4" : "1 and 2"
            },
            "correctAnswer" : "4",
            "correctPrompt" : "Correct! Often times memory is the speed limiting component"
        },
        "10" : {
            "prompt" : "All of these are examples of volatile memory, which means:",
            "answers" : {
                "1" : "They're not reliable",
                "2" : "They have a low vapor pressure",
                "3" : "They are wiped when power turns off"
            },
            "correctAnswer" : "3",
            "correctPrompt" : "Correct! This is the opposite of Persistent storage which is discussed in the Systems module"
        },
        "End" : {
            "prompt" : "You've now learned how computers manage tasks over a period of time. Check out the next module to see how we can improve upon our computer further to something that better resembles modern CPUs",
            "answers" : {
            },
            "correctAnswer" : "",
            "correctPrompt" : ""
        },
    },
    "4: Make it Think Faster" : {
        "Intro" : {
            "prompt" : "Lets examine a few simple steps we can take to improve upon our basic logic/storage combo to really amp up our speed",
            "answers" : {},
            "correctAnswer" : "7",
            "correctPrompt" : ""
        },
        "1" : {
            "prompt" : "Consider two loads of laundry. Which is most efficient?",
            "answers" : {
                "1" : "Wash, Dry, Fold Load 1, Wash, Dry, Fold Load 2",
                "2" : "Wash Load 1, Dry Load 1 and Wash Load 2, Fold Load 1 and Dry Load 2, Fold Load 2"
            },
            "correctAnswer" : "2",
            "correctPrompt" : "Notice how we went from 6 steps to 4? This is the concept of pipelining. Lets apply it to a processor"
        },
        "2" : {
            "prompt" : "Consider two instructions. Two additions. Which is more efficient?",
            "answers" : {
                "1" : "Decode, Add, Save Instr 1, Decode, Add, Save Instr 2",
                "2" : "Decode Instr 1, Add Instr 1 and Decode Instr 2, Save Instr 1 and Add Instr 2, Save Instr 2"
            },
            "correctAnswer" : "2",
            "correctPrompt" : "We want to maximize resource use. More pipelining means more overlapped latency which leads to more speed"
        },
        "3" : {
            "prompt" : "Now consider 2 instructions, an addition (I1) and an unrelated save of a differente value (I2). How can we properly execute this?",
            "answers" : {
                "1" : "I1 then I2",
                "2" : "I2 then I1",
                "3" : "Either"
            },
            "correctAnswer" : "3",
            "correctPrompt" : "This is the concept of reordering. Be careful though! You have to be 100% accurate in classifying what you can reorder"
        },
        "4" : {
            "prompt" : "Consider our two loads of laundry again. How many washer dryer combos would be best for you to buy?",
            "answers" : {
                "1" : "1",
                "2" : "2",
                "3" : "3",
                "4" : "4"
            },
            "correctAnswer" : "2",
            "correctPrompt" : "This is the concept of parallelism - doing multiple things at a time is great - but it comes at a cost, and determining the balance is tricky"
        },
        "5" : {
            "prompt" : "Increasing pipeline depth is referred to as scaling",
            "answers" : {
                "1" : "Vertically",
                "2" : "Horizontally"
            },
            "correctAnswer" : "1",
            "correctPrompt" : "The process gets 'deeper' as we do this"
        },
        "6" : {
            "prompt" : "Increasing number of cores is referred to as scaling",
            "answers" : {
                "1" : "Vertically",
                "2" : "Horizontally"
            },
            "correctAnswer" : "2",
            "correctPrompt" : "The process gets 'wider' as we do this"
        },
        "7" : {
            "prompt" : "The best processor is one that is scaled",
            "answers" : {
                "1" : "Vertically",
                "2" : "Horizontally",
                "3" : "Both ways in moderation"
            },
            "correctAnswer" : "3",
            "correctPrompt" : "Both scaling methods have costs and benefits, and those benefits diminish at a certain point. Determining this point for each scaling mechanism is a major role of computer architects"
        },
        "End" : {
            "prompt" : "Applying these concepts has helped us make our processor way faster! Now lets write our first program!",
            "answers" : {
            },
            "correctAnswer" : "",
            "correctPrompt" : ""
        },
    },
    "5: Speak its language" : {
        "Intro" : {
            "prompt" : "We have a really fast CPU, but how do we use it? This module covers the development of programming languages",
            "answers" : {},
            "correctAnswer" : "10",
            "correctPrompt" : ""
        },
        "1" : {
            "prompt" : "The most basic programming language is written purely in:",
            "answers" : {
                "1" : "English",
                "2" : "French",
                "3" : "Binary",
                "4" : "C"
            },
            "correctAnswer" : "3",
            "correctPrompt" : "Binary voltages are what our computers speak - this is how we speak directly to them"
        },
        "2" : {
            "prompt" : "To make our lives (only slightly) less difficult, we abstract to ___, which still represents 1 to 1 lines of binary",
            "answers" : {
                "1" : "C",
                "2" : "C++",
                "3" : "Binary++",
                "4" : "Assembly"
            },
            "correctAnswer" : "4",
            "correctPrompt" : "Assembly simply swaps actual binary to symbols we can read. A load instruction encoded as 1101100011 could be written as LD, way easier than raw binary"
        },
        "3" : {
            "prompt" : "One step up from assembly, we get the lowest level modern language in mostly readable english: ",
            "answers" : {
                "1" : "C++",
                "2" : "Python",
                "3" : "Java",
                "4" : "C"
            },
            "correctAnswer" : "4",
            "correctPrompt" : "Many lines of C are single lines of assembly. It is more usable and readable"
        },
        "4" : {
            "prompt" : "Computers can't read C. How does the computer know what to do?",
            "answers" : {
                "1" : "C is translated into assembly",
                "2" : "C is compiled into assembly",
                "3" : "C is interpereted into assembly",
                "4" : "C is transpiled into assembly"
            },
            "correctAnswer" : "2",
            "correctPrompt" : "Compilation is crucial for creating an efficient program. Instead of translating line by line, the whole text is considered and optimized as it is converted into a binary file"
        },
        "5" : {
            "prompt" : "Compilers build a program. Interpreters",
            "answers" : {
                "1" : "Do the same",
                "2" : "Dismantle programs",
                "3" : "Run programs line by line",
            },
            "correctAnswer" : "3",
            "correctPrompt" : "Less efficient, but easier to use, higher level languages that are more interested in complexity than efficiency often rely on interpretation"
        },
        "6" : {
            "prompt" : "C can still be annoying to work with. As an improvement, we have:",
            "answers" : {
                "1" : "C++",
                "2" : "C--",
                "3" : "C 2",
                "4" : "C 2 Tokyo Drift"
            },
            "correctAnswer" : "1",
            "correctPrompt" : "C++ (meaning C + 1) is an extension of C to make things easier. Still really low level, but less inconvenient"
        },
        "7" : {
            "prompt" : "Similar to C++ in structure, ___ offers a combination of both compilation and interperetation",
            "answers" : {
                "1" : "Java",
                "2" : "JavaScript",
                "3" : "Python",
                "4" : "SQL"
            },
            "correctAnswer" : "1",
            "correctPrompt" : "Java reads similarly to C++, with additional provided structures and tools"
        },
        "8" : {
            "prompt" : "Used primarily as a scripting language, this low syntax language is purely interpereted",
            "answers" : {
                "1" : "Java",
                "2" : "JavaScript",
                "3" : "Python",
                "4" : "SQL"
            },
            "correctAnswer" : "3",
            "correctPrompt" : "Python is generally faster to write, slower to run"
        },
        "9" : {
            "prompt" : "This language is extremely versatile but highly abstracted from the bare metal assembly and C before it, but is the language of the web",
            "answers" : {
                "1" : "Java",
                "2" : "JavaScript",
                "3" : "Python",
                "4" : "SQL"
            },
            "correctAnswer" : "2",
            "correctPrompt" : "Surprisingly no relation to Java!"
        },
        "10" : {
            "prompt" : "A specific purpose language for accessing databases. So high level it resembles english more than machine language",
            "answers" : {
                "1" : "Java",
                "2" : "JavaScript",
                "3" : "Python",
                "4" : "SQL"
            },
            "correctAnswer" : "4",
            "correctPrompt" : "Selective Query Language is only used for accessing databases"
        },
        "End" : {
            "prompt" : "There are tons of languages out there, we've only covered the most popular few. This should give you an understanding of how something human readable becomes machine readable",
            "answers" : {},
            "correctAnswer" : "",
            "correctPrompt" : ""
        },
    },
    "6: Build a system" : {
        "Intro" : {
            "prompt" : "There is much more to computers than just processing - lets make a computer system!",
            "answers" : {},
            "correctAnswer" : "6",
            "correctPrompt" : ""
        },
        "1" : {
            "prompt" : "So far, we've been making a CPU, a:",
            "answers" : {
                "1" : "Computer Processing Unit",
                "2" : "Computation Processing Unit",
                "3" : "Central Processing Unit",
                "4" : "Computer Piece Unit"
            },
            "correctAnswer" : "3",
            "correctPrompt" : "The CPU is the brain of the system - but a brain isn't super useful on its own!"
        },
        "2" : {
            "prompt" : "Our CPU memory takes the form of which computer system component?",
            "answers" : {
                "1" : "RAM",
                "2" : "Disk",
                "3" : "GPU",
                "4" : "Other Peripheral Devices"
            },
            "correctAnswer" : "1",
            "correctPrompt" : "RAM is our middleground between persistent storage and the CPU. Somewhat fast, somewhat large, right in the middle"
        },
        "3" : {
            "prompt" : "Persistent storage exists in the:",
            "answers" : {
                "1" : "RAM",
                "2" : "Disk",
                "3" : "GPU",
                "4" : "Other Peripheral Devices"
            },
            "correctAnswer" : "2",
            "correctPrompt" : "Disks store a ton, and don't lose data when power is lost - but they are extremely slow"
        },
        "4" : {
            "prompt" : "Our keyboard is a",
            "answers" : {
                "1" : "RAM",
                "2" : "Disk",
                "3" : "GPU",
                "4" : "Other Peripheral Devices"
            },
            "correctAnswer" : "4",
            "correctPrompt" : "Peripheral devices like keyboards and displays are optional - useful for users, but not necessary for computation"
        },
        "5" : {
            "prompt" : "If we want to process a very parallel operation, we would use a",
            "answers" : {
                "1" : "RAM",
                "2" : "Disk",
                "3" : "GPU",
                "4" : "Other Peripheral Devices"
            },
            "correctAnswer" : "3",
            "correctPrompt" : "Parallelism has tradeoffs, but some operations like graphics processing have so much parallelism having an entire chip dedicated to processing thousands of things at once is worthwhile"
        },
        "6" : {
            "prompt" : "Examples of other peripherals include",
            "answers" : {
                "1" : "Mouse, Keyboard",
                "2" : "Wifi Chip",
                "3" : "Display",
                "4" : "All of the above"
            },
            "correctAnswer" : "4",
            "correctPrompt" : "You can add lots of devices to your system to improve capabilities. ALl of these components will communicate with the system to form one coherent digital tool!"
        },
        "End" : {
            "prompt" : "Computer systems require alot more to implement than just concepts - but having a grasp of the concepts can give you a solid idea of whats going on under the hood",
            "answers" : {
            },
            "correctAnswer" : "",
            "correctPrompt" : ""
        },
    },
    "6: Build a Program" : {
        "Intro" : {
            "prompt" : "Beyond the underlying machine code, we need more advanced strategies to make efficient applications that perform complex functions",
            "answers" : {},
            "correctAnswer" : "11",
            "correctPrompt" : ""
        },
        "1" : {
            "prompt" : "A variable is a:",
            "answers" : {
                "1" : "Object to be solved for",
                "2" : "Anything that changes over time",
                "3" : "Way of representing data for use in code",
                "4" : "Way of doing algebra on computers"
            },
            "correctAnswer" : "3",
            "correctPrompt" : "Variables can be anything - they simply store and represent values - even if they never change"
        },
        "2" : {
            "prompt" : "A function is a:",
            "answers" : {
                "1" : "Reusable segment of code that does something",
                "2" : "Description of what our code does",
                "3" : "Mathematical object",
                "4" : "Process"
            },
            "correctAnswer" : "1",
            "correctPrompt" : "Functions allow for abstraction and easier code reading but really are just code that can be used in multiple places"
        },
        "3" : {
            "prompt" : "A type is a",
            "answers" : {
                "1" : "Single keystroke",
                "2" : "Description of what a variable can and can't do",
                "3" : "A genre of functions",
                "4" : "An expected behavior"
            },
            "correctAnswer" : "2",
            "correctPrompt" : "Types are only used in strongly typed languages, but make ensuring correctness easier"
        },
        "4" : {
            "prompt" : "A pointer is a",
            "answers" : {
                "1" : "Tip on how to code better",
                "2" : "sharp object",
                "3" : "memory address",
                "4" : "representation of specific data"
            },
            "correctAnswer" : "3",
            "correctPrompt" : "Sometimes its more useful to know where a value is that what it is - that is what pointers accomplish"
        },
        "5" : {
            "prompt" : "A structure is",
            "answers" : {
                "1" : "A way of organizing data",
                "2" : "A way of organizing data, as well as associated functions",
                "3" : "A way of styling code into a certain shape",
                "4" : "A way of ordering data"
            },
            "correctAnswer" : "1",
            "correctPrompt" : "Sometimes its useful to store many values together in memory, such as to represent x,y coordinates"
        },
        "6" : {
            "prompt" : "An array is",
            "answers" : {
                "1" : "A way of organizing data",
                "2" : "A way of organizing data, as well as associated functions",
                "3" : "A way of styling code into a certain shape",
                "4" : "A way of ordering data"
            },
            "correctAnswer" : "4",
            "correctPrompt" : "Arrays are ordered lists, very useful for processing complex data"
        },
        "7" : {
            "prompt" : "A class is",
            "answers" : {
                "1" : "A way of organizing data",
                "2" : "A way of organizing data, as well as associated functions",
                "3" : "A way of styling code into a certain shape",
                "4" : "A way of ordering data in memory"
            },
            "correctAnswer" : "2",
            "correctPrompt" : "Almost like a better structure, classes allow for object oriented programming, where objects (classes) operate as agents on their own data with their own functions"
        },
        "8" : {
            "prompt" : "A map is",
            "answers" : {
                "1" : "A chain of values pointing to eachother",
                "2" : "An association of key->value pairs",
                "3" : "A way of representing relationships of multiple objects between one another",
                "4" : "A way of representing hierarchies in data"
            },
            "correctAnswer" : "2",
            "correctPrompt" : "Sometimes called a dictionary"
        },
        "9" : {
            "prompt" : "A graph is",
            "answers" : {
                "1" : "A chain of values pointing to eachother",
                "2" : "An association of key->value pairs",
                "3" : "A way of representing relationships of multiple objects between one another",
                "4" : "A way of representing hierarchies in data"
            },
            "correctAnswer" : "3",
            "correctPrompt" : "Not in a traditional sense like a bar graph, more like a web of nodes, connected by edges"
        },
        "10" : {
            "prompt" : "A linked list is",
            "answers" : {
                "1" : "A chain of values pointing to eachother",
                "2" : "An association of key->value pairs",
                "3" : "A way of representing relationships of multiple objects between one another",
                "4" : "A way of representing hierarchies in data"
            },
            "correctAnswer" : "1",
            "correctPrompt" : "Data -> More Data -> Even more Data, these allow for easy insertion and deletion compared to arrays"
        },
        "11" : {
            "prompt" : "A tree is",
            "answers" : {
                "1" : "A chain of values pointing to eachother",
                "2" : "An association of key->value pairs",
                "3" : "A way of representing relationships of multiple objects between one another",
                "4" : "A way of representing hierarchies in data"
            },
            "correctAnswer" : "4",
            "correctPrompt" : "A root has branches, which have branches, which have branches"
        },
        "End" : {
            "prompt" : "You now know the basics of programming - including useful data structures. Now lets program something really useful in the next module",
            "answers" : {},
            "correctAnswer" : "",
            "correctPrompt" : ""
        },
    },
    "7: Build an App, part 1" : {
        "Intro" : {
            "prompt" : "We have a computer, we have a system, and we know how to use it. Its time to make something useful! First, we'll make a front end.",
            "answers" : {},
            "correctAnswer" : "7",
            "correctPrompt" : ""
        },
        "1" : {
            "prompt" : "The front end of an application includes the:",
            "answers" : {
                "1" : "Database",
                "2" : "Storage",
                "3" : "UI",
                "4" : "Security Protocols"
            },
            "correctAnswer" : "3",
            "correctPrompt" : "Front end development includes buttons, navigation, data display, and screen creation"
        },
        "2" : {
            "prompt" : "The most barebones approach to structuring UI is",
            "answers" : {
                "1" : "JavaScript",
                "2" : "HTML",
                "3" : "CSS",
                "4" : "SQL"
            },
            "correctAnswer" : "2",
            "correctPrompt" : "HTML provides structure to a UI, like the skeleton"
        },
        "3" : {
            "prompt" : "A common approach to styling UI is",
            "answers" : {
                "1" : "JavaScript",
                "2" : "HTML",
                "3" : "CSS",
                "4" : "SQL"
            },
            "correctAnswer" : "3",
            "correctPrompt" : "Cascading style sheets turn HTML into interesting webpages instead of plain text"
        },
        "4" : {
            "prompt" : "One of the most popular ways to do front end development is with:",
            "answers" : {
                "1" : "Frameworks",
                "2" : "Large Teams",
                "3" : "Crayons",
                "4" : "Special Languages"
            },
            "correctAnswer" : "1",
            "correctPrompt" : "React, Angular, Vue, and SwiftUI are all popular frameworks that make UI easy"
        },
        "5" : {
            "prompt" : "A state variable is one which",
            "answers" : {
                "1" : "Controls the current page",
                "2" : "Changes based on device location",
                "3" : "Updates the view when changed",
                "4" : "Is stored persistently"
            },
            "correctAnswer" : "3",
            "correctPrompt" : "State variables are useful for ensuring all displayed data is accurate"
        },
        "6" : {
            "prompt" : "Data in the UI typically",
            "answers" : {
                "1" : "Persists",
                "2" : "Is Shared Instantly",
                "3" : "Resets with the app",
                "4" : "Changes every time its launched"
            },
            "correctAnswer" : "3",
            "correctPrompt" : "Without a backend, UI is mostly just screens. Very useful in a system - lackluster on their own"
        },
        "7" : {
            "prompt" : "In order for the UI to display updated data, it must get the data by",
            "answers" : {
                "1" : "Indexing the data array",
                "2" : "Making a request to the back end",
                "3" : "Using cached data",
                "4" : "Looking into the database directly"
            },
            "correctAnswer" : "2",
            "correctPrompt" : "We need a backend for persistent data storage, which we will access by making requests"
        },
        "End" : {
            "prompt" : "Thats about it for our front end! Now its time to do more, but first, we need to connect our devices",
            "answers" : {
            },
            "correctAnswer" : "",
            "correctPrompt" : ""
        },
    },
    "9: Build the Internet" : {
        "Intro" : {
            "prompt" : "The internet is used by all and understood by few. Lets take a look at how it works!",
            "answers" : {},
            "correctAnswer" : "7",
            "correctPrompt" : ""
        },
        "1" : {
            "prompt" : "Internet communication is primarily via",
            "answers" : {
                "1" : "Wifi",
                "2" : "Sattelite",
                "3" : "Wires",
                "4" : "Cloud"
            },
            "correctAnswer" : "3",
            "correctPrompt" : "The world is connected by massive nets of fiber optic wires to communicate between each other"
        },
        "2" : {
            "prompt" : "The cloud is",
            "answers" : {
                "1" : "Wifi",
                "2" : "Sattelite",
                "3" : "Still Wires",
                "4" : "In the air"
            },
            "correctAnswer" : "3",
            "correctPrompt" : "Most 'Cloud' is really just a far away datacenter, communicated with by the internet"
        },
        "3" : {
            "prompt" : "A system using many internet based operations is considered a",
            "answers" : {
                "1" : "Distributed System",
                "2" : "Online App",
                "3" : "Back end program",
                "4" : "API call"
            },
            "correctAnswer" : "1",
            "correctPrompt" : "Distributed systems divide operation across separate computing systems"
        },
        "4" : {
            "prompt" : "One of the most popular ways to communicate across the internet is",
            "answers" : {
                "1" : "JSON",
                "2" : "JavaScript",
                "3" : "HTTP/HTTPS",
                "4" : "SQL"
            },
            "correctAnswer" : "3",
            "correctPrompt" : "Hypertext Transfer Protocol is often how we make requests for internet things"
        },
        "5" : {
            "prompt" : "The most common UI for accessing the internet is",
            "answers" : {
                "1" : "A terminal",
                "2" : "A server",
                "3" : "A protocol",
                "4" : "A browser"
            },
            "correctAnswer" : "4",
            "correctPrompt" : "Chrome, Firefox, and Safari are all browsers that make requests and display results"
        },
        "6" : {
            "prompt" : "When you make a request, it is answered by",
            "answers" : {
                "1" : "A terminal",
                "2" : "A server",
                "3" : "A protocol",
                "4" : "A browser"
            },
            "correctAnswer" : "2",
            "correctPrompt" : "Servers 'serve' responses to requests such as requesting a webpage or an image"
        },
        "7" : {
            "prompt" : "Information is always tranferred over the internet by using",
            "answers" : {
                "1" : "A terminal",
                "2" : "A server",
                "3" : "A protocol",
                "4" : "A browser"
            },
            "correctAnswer" : "3",
            "correctPrompt" : "Web protocols define how data is structured so it can properly be sent and received by various devices"
        },
        "End" : {
            "prompt" : "Now we have an idea of how the internet works! Lets go back to our UI and make it more interesting",
            "answers" : {},
            "correctAnswer" : "",
            "correctPrompt" : ""
        },
    },
    "10: Build an app, pt 2" : {
        "Intro" : {
            "prompt" : "We have screens, but now its time to take our app to the next level - the internet",
            "answers" : {},
            "correctAnswer" : "7",
            "correctPrompt" : ""
        },
        "1" : {
            "prompt" : "For storing large sets of data that involve connections between one another, we'll use",
            "answers" : {
                "1" : "A Simple Storage Service",
                "2" : "A NoSQL database",
                "3" : "A Relational database",
                "4" : "A Cloud Function"
            },
            "correctAnswer" : "3",
            "correctPrompt" : "We can use SQL to access these tables of data"
        },
        "2" : {
            "prompt" : "For storing large sets of data that involve inherent hierarchy or loose structure, we'll use",
            "answers" : {
                "1" : "A Simple Storage Service",
                "2" : "A NoSQL database",
                "3" : "A Relational database",
                "4" : "A Cloud Function"
            },
            "correctAnswer" : "2",
            "correctPrompt" : "As a tree structure, these databases are looser structure with top down hierarchy"
        },
        "3" : {
            "prompt" : "For running code on a seperate device, we'll use",
            "answers" : {
                "1" : "A Simple Storage Service",
                "2" : "A NoSQL database",
                "3" : "A Relational database",
                "4" : "A Cloud Function"
            },
            "correctAnswer" : "4",
            "correctPrompt" : "We can offload computation serverside to ease client side latency"
        },
        "4" : {
            "prompt" : "For storing documents like videos or images, we'll use",
            "answers" : {
                "1" : "A Simple Storage Service",
                "2" : "A NoSQL database",
                "3" : "A Relational database",
                "4" : "A Cloud Function"
            },
            "correctAnswer" : "1",
            "correctPrompt" : "Simple Storage allows efficient scaling with size, making it ideal for a smaller number of larger documents"
        },
        "5" : {
            "prompt" : "Code that makes a request to another device (server, database, etc.) is considered",
            "answers" : {
                "1" : "Slow",
                "2" : "Synchronous",
                "3" : "Asynchronous",
                "4" : "Fast"
            },
            "correctAnswer" : "3",
            "correctPrompt" : "Asynchronous means happening outside of the timeline of the application. The request is sent, it comes back at some point in the future independent of the requesting device"
        },
        "6" : {
            "prompt" : "These requests are responded to by a back end",
            "answers" : {
                "1" : "Cloud",
                "2" : "Server",
                "3" : "Function",
                "4" : "Responder"
            },
            "correctAnswer" : "2",
            "correctPrompt" : "We typically make requests to web servers, as they are exceptional at responding quickly as well as responding to many requests at a time"
        },
        "7" : {
            "prompt" : "Inter device communication of data happens via",
            "answers" : {
                "1" : "Device to Device",
                "2" : "Device to Server to Device",
                "3" : "Server to Server",
                "4" : "In an actual rain cloud"
            },
            "correctAnswer" : "2",
            "correctPrompt" : "Devices make requests, servers send responses. When a change in the server is requested, it is observed by future requests, yielding communication"
        },
        "End" : {
            "prompt" : "Now we have a fully working application that users can use to manipulate their data, as well as communicate with other users. Lets take it a step further and teach our computer how to learn.",
            "answers" : {},
            "correctAnswer" : "",
            "correctPrompt" : ""
        },
    },
    "11: Make it learn" : {
        "Intro" : {
            "prompt" : "AI is brought about by machine learning. Lets use some fancy math and intuitive thinking to make our simple machine learn",
            "answers" : {},
            "correctAnswer" : "12",
            "correctPrompt" : ""
        },
        "1" : {
            "prompt" : "2 + 2 = ?",
            "answers" : {
                "1" : "-9",
                "2" : "false",
                "3" : "Machine Learning",
                "4" : "164.94"
            },
            "correctAnswer" : "1",
            "correctPrompt" : "Well thats not right, but its closer than the others... lets try again"
        },
        "2" : {
            "prompt" : "2 + 2 = ?",
            "answers" : {
                "1" : "-9",
                "2" : "1",
                "3" : "13",
                "4" : "0"
            },
            "correctAnswer" : "2",
            "correctPrompt" : "Better... not quite... again"
        },
        "3" : {
            "prompt" : "2 + 2 = ?",
            "answers" : {
                "1" : "1",
                "2" : "2",
                "3" : "3",
                "4" : "4"
            },
            "correctAnswer" : "4",
            "correctPrompt" : "Perfect! lets do another"
        },
        "4" : {
            "prompt" : "2 + 5 = ?",
            "answers" : {
                "1" : "1",
                "2" : "2",
                "3" : "3",
                "4" : "4"
            },
            "correctAnswer" : "4",
            "correctPrompt" : "Disappointing..."
        },
        "5" : {
            "prompt" : "Machine learning involves a bunch of complicated math that boils down to:",
            "answers" : {
                "1" : "More fancy math",
                "2" : "AI taking over the world",
                "3" : "Brute force trial and error",
                "4" : "Iterative Feedback"
            },
            "correctAnswer" : "4",
            "correctPrompt" : "Machines learn like we do. We try, then get feedback. We use that feedback to get better, but machines don't speak english..."
        },
        "6" : {
            "prompt" : "We can tell machines in math how they're doing using a",
            "answers" : {
                "1" : "Integral",
                "2" : "Loss Function",
                "3" : "Derivative",
                "4" : "English to Binary Encoder"
            },
            "correctAnswer" : "2",
            "correctPrompt" : "A function that numerically evaluates the performance can be optimized to produce a certain value."
        },
        "7" : {
            "prompt" : "Seen in the beginning example, a model that learns to get the right answer instead of solve the problem experiences",
            "answers" : {
                "1" : "Cheating",
                "2" : "Overfitting",
                "3" : "Accuracy",
                "4" : "Precision"
            },
            "correctAnswer" : "2",
            "correctPrompt" : "To much optimization and we get good at satisfying the loss function only for specific values"
        },
        "8" : {
            "prompt" : "The process of exposing a model to a variety of data and improving iteratively is called",
            "answers" : {
                "1" : "Practice",
                "2" : "Working",
                "3" : "Training",
                "4" : "Setup"
            },
            "correctAnswer" : "3",
            "correctPrompt" : "Adjusting model parameters to improve the goal is called training"
        },
        "9" : {
            "prompt" : "Organizing multiple models into one large cohesive model is called",
            "answers" : {
                "1" : "Reinforcement Learning",
                "2" : "Deep Learning",
                "3" : "Wide Learning",
                "4" : "Fast Learning"
            },
            "correctAnswer" : "2",
            "correctPrompt" : "Deep learning tends to be better at analyzing more complex trends"
        },
        "10" : {
            "prompt" : "Providing feedback to a model while it operates is referred to as",
            "answers" : {
                "1" : "Reinforcement Learning",
                "2" : "Deep Learning",
                "3" : "Wide Learning",
                "4" : "Fast Learning"
            },
            "correctAnswer" : "1",
            "correctPrompt" : "RL is great for real time systems, especially those that change patterns over time"
        },
        "11" : {
            "prompt" : "An ML Module structure resembling that of a human brain is a",
            "answers" : {
                "1" : "Deep mind",
                "2" : "Computer Brain",
                "3" : "Neural Network",
                "4" : "Terminator"
            },
            "correctAnswer" : "3",
            "correctPrompt" : "Deep learning is primarily done with neural networks, where each module is considered a Neuron"
        },
        "12" : {
            "prompt" : "One of the largest modern flaws of modern machine learning is",
            "answers" : {
                "1" : "Cost of training and operation",
                "2" : "Piracy and Ethics",
                "3" : "Reliability",
                "4" : "All of the above"
            },
            "correctAnswer" : "4",
            "correctPrompt" : "ML/DL are an emerging field. Modern models are impressive but we as a society have to decide what use is ehtical, and deal with the consequences of model innaccuracy, training on real people's data, and expensive computation taxing the environment"
        },
        "End" : {
            "prompt" : "Thats it! You now understand the mile high view of what it takes to go from transistors to talking to AI and forgetting its nothing more than bits and silicon. Congrats!",
            "answers" : {
            },
            "correctAnswer" : "",
            "correctPrompt" : ""
        },
    },

}

export default BuilderData;