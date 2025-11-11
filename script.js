/**
 * Multi-Tape Turing Machine Transition Table
 * Based on actual implementation logic (3-tape version)
 */
const multiTapeTransitions = [
    // State q0: Start state - Check if sequences have symbols
    {
        state: 'q0',
        read: ['A', 'A', '_'],
        write: [null, null, null],
        move: ['S', 'S', 'S'],
        next: 'q1',
        desc: 'Start comparison (both sequences have symbols)'
    },
    {
        state: 'q0',
        read: ['A', 'T', '_'],
        write: [null, null, null],
        move: ['S', 'S', 'S'],
        next: 'q1',
        desc: 'Start comparison (both sequences have symbols)'
    },
    {
        state: 'q0',
        read: ['A', 'C', '_'],
        write: [null, null, null],
        move: ['S', 'S', 'S'],
        next: 'q1',
        desc: 'Start comparison (both sequences have symbols)'
    },
    {
        state: 'q0',
        read: ['A', 'G', '_'],
        write: [null, null, null],
        move: ['S', 'S', 'S'],
        next: 'q1',
        desc: 'Start comparison (both sequences have symbols)'
    },
    {
        state: 'q0',
        read: ['T', 'A', '_'],
        write: [null, null, null],
        move: ['S', 'S', 'S'],
        next: 'q1',
        desc: 'Start comparison (both sequences have symbols)'
    },
    {
        state: 'q0',
        read: ['T', 'T', '_'],
        write: [null, null, null],
        move: ['S', 'S', 'S'],
        next: 'q1',
        desc: 'Start comparison (both sequences have symbols)'
    },
    {
        state: 'q0',
        read: ['T', 'C', '_'],
        write: [null, null, null],
        move: ['S', 'S', 'S'],
        next: 'q1',
        desc: 'Start comparison (both sequences have symbols)'
    },
    {
        state: 'q0',
        read: ['T', 'G', '_'],
        write: [null, null, null],
        move: ['S', 'S', 'S'],
        next: 'q1',
        desc: 'Start comparison (both sequences have symbols)'
    },
    {
        state: 'q0',
        read: ['C', 'A', '_'],
        write: [null, null, null],
        move: ['S', 'S', 'S'],
        next: 'q1',
        desc: 'Start comparison (both sequences have symbols)'
    },
    {
        state: 'q0',
        read: ['C', 'T', '_'],
        write: [null, null, null],
        move: ['S', 'S', 'S'],
        next: 'q1',
        desc: 'Start comparison (both sequences have symbols)'
    },
    {
        state: 'q0',
        read: ['C', 'C', '_'],
        write: [null, null, null],
        move: ['S', 'S', 'S'],
        next: 'q1',
        desc: 'Start comparison (both sequences have symbols)'
    },
    {
        state: 'q0',
        read: ['C', 'G', '_'],
        write: [null, null, null],
        move: ['S', 'S', 'S'],
        next: 'q1',
        desc: 'Start comparison (both sequences have symbols)'
    },
    {
        state: 'q0',
        read: ['G', 'A', '_'],
        write: [null, null, null],
        move: ['S', 'S', 'S'],
        next: 'q1',
        desc: 'Start comparison (both sequences have symbols)'
    },
    {
        state: 'q0',
        read: ['G', 'T', '_'],
        write: [null, null, null],
        move: ['S', 'S', 'S'],
        next: 'q1',
        desc: 'Start comparison (both sequences have symbols)'
    },
    {
        state: 'q0',
        read: ['G', 'C', '_'],
        write: [null, null, null],
        move: ['S', 'S', 'S'],
        next: 'q1',
        desc: 'Start comparison (both sequences have symbols)'
    },
    {
        state: 'q0',
        read: ['G', 'G', '_'],
        write: [null, null, null],
        move: ['S', 'S', 'S'],
        next: 'q1',
        desc: 'Start comparison (both sequences have symbols)'
    },
    {
        state: 'q0',
        read: ['_', '*', '*'],
        write: [null, null, null],
        move: ['S', 'S', 'S'],
        next: 'qaccept',
        desc: 'End of sequence reached — Sequence A finished'
    },
    {
        state: 'q0',
        read: ['*', '_', '*'],
        write: [null, null, null],
        move: ['S', 'S', 'S'],
        next: 'qaccept',
        desc: 'End of sequence reached — Sequence B finished'
    },
    
    // State q1: Compare and write results
    {
        state: 'q1',
        read: ['A', 'A', '_'],
        write: [null, null, '✓'],
        move: ['R', 'R', 'R'],
        next: 'q0',
        desc: 'Match: A = A, write ✓'
    },
    {
        state: 'q1',
        read: ['T', 'T', '_'],
        write: [null, null, '✓'],
        move: ['R', 'R', 'R'],
        next: 'q0',
        desc: 'Match: T = T, write ✓'
    },
    {
        state: 'q1',
        read: ['C', 'C', '_'],
        write: [null, null, '✓'],
        move: ['R', 'R', 'R'],
        next: 'q0',
        desc: 'Match: C = C, write ✓'
    },
    {
        state: 'q1',
        read: ['G', 'G', '_'],
        write: [null, null, '✓'],
        move: ['R', 'R', 'R'],
        next: 'q0',
        desc: 'Match: G = G, write ✓'
    },
    {
        state: 'q1',
        read: ['A', 'T', '_'],
        write: [null, null, '✗'],
        move: ['R', 'R', 'R'],
        next: 'q0',
        desc: 'Mismatch: A ≠ T, write ✗'
    },
    {
        state: 'q1',
        read: ['A', 'C', '_'],
        write: [null, null, '✗'],
        move: ['R', 'R', 'R'],
        next: 'q0',
        desc: 'Mismatch: A ≠ C, write ✗'
    },
    {
        state: 'q1',
        read: ['A', 'G', '_'],
        write: [null, null, '✗'],
        move: ['R', 'R', 'R'],
        next: 'q0',
        desc: 'Mismatch: A ≠ G, write ✗'
    },
    {
        state: 'q1',
        read: ['T', 'A', '_'],
        write: [null, null, '✗'],
        move: ['R', 'R', 'R'],
        next: 'q0',
        desc: 'Mismatch: T ≠ A, write ✗'
    },
    {
        state: 'q1',
        read: ['T', 'C', '_'],
        write: [null, null, '✗'],
        move: ['R', 'R', 'R'],
        next: 'q0',
        desc: 'Mismatch: T ≠ C, write ✗'
    },
    {
        state: 'q1',
        read: ['T', 'G', '_'],
        write: [null, null, '✗'],
        move: ['R', 'R', 'R'],
        next: 'q0',
        desc: 'Mismatch: T ≠ G, write ✗'
    },
    {
        state: 'q1',
        read: ['C', 'A', '_'],
        write: [null, null, '✗'],
        move: ['R', 'R', 'R'],
        next: 'q0',
        desc: 'Mismatch: C ≠ A, write ✗'
    },
    {
        state: 'q1',
        read: ['C', 'T', '_'],
        write: [null, null, '✗'],
        move: ['R', 'R', 'R'],
        next: 'q0',
        desc: 'Mismatch: C ≠ T, write ✗'
    },
    {
        state: 'q1',
        read: ['C', 'G', '_'],
        write: [null, null, '✗'],
        move: ['R', 'R', 'R'],
        next: 'q0',
        desc: 'Mismatch: C ≠ G, write ✗'
    },
    {
        state: 'q1',
        read: ['G', 'A', '_'],
        write: [null, null, '✗'],
        move: ['R', 'R', 'R'],
        next: 'q0',
        desc: 'Mismatch: G ≠ A, write ✗'
    },
    {
        state: 'q1',
        read: ['G', 'T', '_'],
        write: [null, null, '✗'],
        move: ['R', 'R', 'R'],
        next: 'q0',
        desc: 'Mismatch: G ≠ T, write ✗'
    },
    {
        state: 'q1',
        read: ['G', 'C', '_'],
        write: [null, null, '✗'],
        move: ['R', 'R', 'R'],
        next: 'q0',
        desc: 'Mismatch: G ≠ C, write ✗'
    },
    {
        state: 'q1',
        read: ['_', '*', '*'],
        write: [null, null, null],
        move: ['S', 'S', 'S'],
        next: 'qaccept',
        desc: 'Comparison complete — Sequence A ended'
    },
    {
        state: 'q1',
        read: ['*', '_', '*'],
        write: [null, null, null],
        move: ['S', 'S', 'S'],
        next: 'qaccept',
        desc: 'Comparison complete — Sequence B ended'
    }
];

/**
 * Multi-Tape Turing Machine Class
 * 
 * This class implements a three-tape Turing machine for DNA sequence matching.
 * 
 * Tape 1: DNA Sequence A (input, read-only)
 * Tape 2: DNA Sequence B (input, read-only)
 * Tape 3: Output tape (writes ✓ for match, ✗ for mismatch)
 * 
 * States:
 * - q0: Start state, begin reading
 * - q1: Compare characters and write result
 * - qaccept: Accept state (both sequences processed)
 */
class MultiTapeTuringMachine {
    constructor(seqA, seqB) {
        // Initialize 3 tapes with padding for visualization
        this.numTapes = 3;
        this.tapeSize = Math.max(seqA.length, seqB.length) + 5;
        
        // Tape 1: Sequence A with blanks
        this.tapes = [
            ['_', ...seqA.split(''), ...'_'.repeat(5).split('')],
            ['_', ...seqB.split(''), ...'_'.repeat(5).split('')],
            '_'.repeat(this.tapeSize).split('')
        ];
        
        // Initialize head positions (all start at position 1, after first blank)
        this.heads = [1, 1, 1];
        
        // State management
        this.currentState = 'q0';
        this.acceptState = 'qaccept';
        this.rejectState = 'qreject'
        this.stepCount = 0;
        this.outputResult = '';

        this.invalidInput = false;
        this.rejectReason = null;
        
        // Original sequences for reference
        this.seqA = seqA;
        this.seqB = seqB;
        this.seqLength = Math.min(seqA.length, seqB.length);
        
        // Transition history tracking (for post-simulation display)
        this.transitionHistory = [];
        
        // Execution history tracking (legacy support)
        this.executionHistory = [];
    }
    
    /**
     * Read current symbols under all tape heads
     */
    read() {
        return this.heads.map((head, i) => this.tapes[i][head]);
    }
    
    /**
     * Write symbols to tapes at current head positions
     */
    write(symbols) {
        symbols.forEach((symbol, i) => {
            if (symbol !== null) {
                this.tapes[i][this.heads[i]] = symbol;
            }
        });
    }
    
    /**
     * Move tape heads ('L', 'R', or 'S' for stay)
     */
    move(directions) {
        directions.forEach((dir, i) => {
            if (dir === 'R') this.heads[i]++;
            else if (dir === 'L') this.heads[i]--;
            // 'S' means stay
        });
    }
    
    /**
     * Transition function - defines the TM behavior
     * Returns: {write: [symbols], move: [directions], nextState: state}
     */
    transition(state, symbols) {
        const [s1, s2, s3] = symbols;

        const symArr = [s1 ?? null, s2 ?? null, s3 ?? null];

        const allowed = new Set(['A','T','C','G','_','✓','✗','*']);
        if (symArr.some(s => s !== null && !allowed.has(s))){
            return {
                write: [null, null, null],
                move: ['S', 'S', 'S'],
                nextState: this.rejectState,
                description: 'Invalid symbol encountered - moving to reject'
            }
        }

        // State q0: Start, prepare to compare
        if (state === 'q0') {
            // If both tapes have non-blank symbols, move to comparison
            if (s1 !== '_' && s2 !== '_') {
                return {
                    write: [null, null, null],
                    move: ['S', 'S', 'S'],
                    nextState: 'q1',
                    description: 'Start comparison'
                };
            }
            // If either tape is blank, we're done
            return {
                write: [null, null, null],
                move: ['S', 'S', 'S'],
                nextState: 'qaccept',
                description: 'End of sequence reached'
            };
        }
        
        // State q1: Compare and write result
        if (state === 'q1') {
            // Check if we've reached the end of either sequence
            if (s1 === '_' || s2 === '_') {
                return {
                    write: [null, null, null],
                    move: ['S', 'S', 'S'],
                    nextState: 'qaccept',
                    description: 'Comparison complete'
                };
            }

        if (state === this.rejectState) {
            return {
                write: [null, null, null],
                move: ['S', 'S', 'S'],
                nextState: this.rejectState,
                description: 'Rejected - halting'
            }
        }
            
            // Compare characters
            const match = s1 === s2;
            const symbol = match ? '✓' : '✗';
            
            return {
                write: [null, null, symbol],
                move: ['R', 'R', 'R'],
                nextState: 'q0',
                description: `${s1} ${match ? '=' : '≠'} ${s2} → Write ${symbol}`
            };
        }
        
        // Accept state - halt
        return null;
    }
    
    /**
     * Execute one step of the Turing machine
     */
    step() {
        if (this.currentState === this.acceptState || this.currentState === this.rejectState) {
            return false; // Machine has halted
        }
        
        // Read current symbols
        const symbols = this.read();
        
        // Get transition
        const trans = this.transition(this.currentState, symbols);
        
        if (!trans) {
            this.currentState = this.acceptState;
            return false;
        }
        
        // Record transition history BEFORE executing transition
        // Prepare a display-friendly write array: if a tape write is null (no change),
        // show the current symbol (so the table isn't empty for that column).
        const displayWrite = trans.write.map((w, i) => (w === null || w === undefined) ? symbols[i] : w);

        this.transitionHistory.push({
            step: this.stepCount + 1,
            currentState: this.currentState,
            read: [...symbols],
            write: [...trans.write],
            displayWrite: displayWrite,
            move: [...trans.move],
            nextState: trans.nextState
        });
        
        // Legacy execution history for backward compatibility
        const stateTransition = `${this.currentState}→${trans.nextState}`;
        let resultType = '-';
        
        if (trans.nextState === 'qaccept') {
            resultType = 'Halt';
        } else if (trans.write[2] === '✓') {
            resultType = 'Match';
        } else if (trans.write[2] === '✗') {
            resultType = 'Mismatch';
        }
        
        this.executionHistory.push({
            step: this.stepCount + 1,
            tape1: symbols[0],
            tape2: symbols[1],
            tape3: trans.write[2] || '—',
            state: stateTransition,
            result: resultType
        });
        
        // Execute transition
        this.write(trans.write);
        this.move(trans.move);
        this.currentState = trans.nextState;
        this.stepCount++;
        
        // Update output result
        this.outputResult = this.tapes[2].slice(1, this.seqLength + 1).join('');
        
        return {
            transition: trans,
            symbols: symbols
        };
    }
    
    /**
     * Check if machine has accepted
     */
    isAccepted() {
        return this.currentState === this.acceptState;
    }

    isRejected() {
        return this.currentState === this.rejectState;
    }
    
    /**
     * Get current output
     */
    getOutput() {
        return this.outputResult;
    }
}

// Global variables for simulation control
let tm = null;
let isRunning = false;
let animationSpeed = 500;
let runInterval = null;

/**
 * Initialize the simulation with user input
 */
function initializeSimulation() {
    // Get input sequences
    const seqA = document.getElementById('sequenceA').value.toUpperCase().trim();
    const seqB = document.getElementById('sequenceB').value.toUpperCase().trim();
    
    // Validate input
    const validChars = /^[ATCG]+$/;
    if (!seqA || !seqB) {
        alert('Please enter both DNA sequences.');
        return;
    }
    
    // Create new Turing machine
    tm = new MultiTapeTuringMachine(seqA, seqB);

    // Reset UI
    document.getElementById('finalResultSection').style.display = 'none';
    
    // Render initial state
    renderTapes();
    updateStatus();
    
    // Enable controls
    document.getElementById('runBtn').disabled = false;
    document.getElementById('stepBtn').disabled = false;
    document.getElementById('resetBtn').disabled = false;
    document.getElementById('pauseBtn').disabled = true;
    document.getElementById('exportBtn').disabled = true;
}

/**
 * Render all tapes to the DOM
 */
function renderTapes() {
    for (let i = 0; i < 3; i++) {
        const tapeDiv = document.getElementById(`tape${i + 1}`);
        const headDiv = document.getElementById(`headIndicator${i + 1}`);
        
        // Render tape cells
        tapeDiv.innerHTML = tm.tapes[i].map((symbol, index) => {
            let cellClass = 'tape-cell';
            let displaySymbol = symbol === '_' ? '' : symbol;
            
            // Add active class for current head position
            if (index === tm.heads[i]) {
                cellClass += ' active';
            }
            
            // Color code output tape
            if (i === 2 && symbol === '✓') {
                cellClass += ' match';
            } else if (i === 2 && symbol === '✗') {
                cellClass += ' mismatch';
            }
            
            // Color code nucleotides
            if (symbol !== '_' && 'ATCG'.includes(symbol)) {
                displaySymbol = `<span class="nucleotide-${symbol}">${symbol}</span>`;
            }
            
            // Set transition speed dynamically to match animation speed
            const transitionSpeed = animationSpeed;
            return `<div class="${cellClass}" style="transition: all ${transitionSpeed}ms linear;">${displaySymbol}</div>`;
        }).join('');
        
        // Hide head indicators (arrows) for all tapes per request
        if (headDiv) {
            headDiv.style.display = 'none';
        }
    }
}

/**
 * Update status display
 */
function updateStatus() {
    document.getElementById('currentState').textContent = tm.currentState;
    document.getElementById('stepNumber').textContent = tm.stepCount;
    document.getElementById('partialResult').innerHTML = tm.getOutput() || '-';
}

/**
 * Execute one step of the simulation
 */
function stepSimulation() {
    if (!tm || tm.isAccepted() || tm.isRejected()) {
        if (tm && (tm.isAccepted() || tm.isRejected())) {
            showFinalResult();
        }
        return;
    }
    
    const result = tm.step();
    
    // Update transition display
    if (result && result.transition) {
        document.getElementById('transitionDisplay').textContent = result.transition.description;
    }
    
    renderTapes();
    updateStatus();
    
    // Check if completed
    if (tm.isAccepted() || tm.isRejected()) {
        pauseSimulation();
        showFinalResult();
    }
}

/**
 * Run simulation continuously
 */
function runSimulation() {
    if (!tm || isRunning) return;
    
    isRunning = true;
    document.getElementById('runBtn').disabled = true;
    document.getElementById('pauseBtn').disabled = false;
    document.getElementById('stepBtn').disabled = true;
    
    runInterval = setInterval(() => {
        stepSimulation();
        if (tm.isAccepted()) {
            pauseSimulation();
        }
    }, animationSpeed);
}

/**
 * Pause the simulation
 */
function pauseSimulation() {
    isRunning = false;
    clearInterval(runInterval);
    document.getElementById('runBtn').disabled = false;
    document.getElementById('pauseBtn').disabled = true;
    document.getElementById('stepBtn').disabled = false;
}

/**
 * Reset the simulation
 */
function resetSimulation() {
    pauseSimulation();
    initializeSimulation();
}

/**
 * Update animation speed
 */
function updateSpeed() {
    animationSpeed = parseInt(document.getElementById('speedSlider').value);
    document.getElementById('speedValue').textContent = animationSpeed;
    
    // If running, restart with new speed
    if (isRunning) {
        pauseSimulation();
        runSimulation();
    }
}

/**
 * Show final result section
 */
function showFinalResult() {
    const section = document.getElementById('finalResultSection');
    section.style.display = 'block';
    
    document.getElementById('finalSeqA').textContent = tm.seqA;
    document.getElementById('finalSeqB').textContent = tm.seqB;
    
    if (tm.isRejected()) {
        document.getElementById('finalOutput').textContent = 'REJECTED';
        document.getElementById('matchStats').innerHTML = `<span class="text-red-600">Rejected</span> — ${tm.rejectReason || 'Invalid input encountered.'}`;
        document.getElementById('exportBtn').disabled = false;
    } else {
        const output = tm.getOutput();
        document.getElementById('finalOutput').innerHTML = output;
    
    // Calculate statistics
    const matches = (output.match(/✓/g) || []).length;
    const mismatches = (output.match(/✗/g) || []).length;
    const total = matches + mismatches;
    const similarity = ((matches / total) * 100).toFixed(1);
    
    document.getElementById('matchStats').innerHTML = 
        `<span class="text-green-600">${matches} matches</span>, ` +
        `<span class="text-red-600">${mismatches} mismatches</span> ` +
        `(${similarity}% similarity)`;
    
    document.getElementById('exportBtn').disabled = false;
    
    // Show transition function and transition history table
    showTransitionFunction();
    showTransitionHistoryTable();
    
    // Initialize and show single-tape version
    initializeSingleTape();
    }

    if (tm.isRejected()) {
        showTransitionFunction();
        showTransitionHistoryTable();
    }
}

/**
 * Show transition function section
 */
function showTransitionFunction() {
    const section = document.getElementById('transitionFunctionSection');
    section.style.display = 'block';
}

/**
 * Single-Tape Turing Machine Implementation
 */
class SingleTapeTuringMachine {
    constructor(seqA, seqB) {
        // Format: _SeqA#SeqB#_____
        const outputLen = Math.min(seqA.length, seqB.length);
        this.tape = ['_', ...seqA.split(''), '#', ...seqB.split(''), '#', ...'_'.repeat(outputLen + 2).split('')];
        this.head = 1; // Start at first character of SeqA
        this.currentState = 'q0';
        this.stepCount = 0;
        this.seqA = seqA;
        this.seqB = seqB;
        this.seqAStart = 1;
        this.seqBStart = seqA.length + 2; // After SeqA and first #
        this.outputStart = seqA.length + seqB.length + 3; // After SeqA#SeqB#
        this.currentPosInSeq = 0; // Track which character position we're comparing
        this.rememberedChar = null;
        this.phase = 'Starting';
    }
    
    /**
     * Transition function for single-tape TM
     */
    transition(state, symbol) {
        // q0: Initial state, move to first char of SeqA
        if (state === 'q0') {
            if ('ATCG'.includes(symbol)) {
                this.rememberedChar = symbol;
                this.phase = `Remember ${symbol} from SeqA`;
                return {
                    write: symbol,
                    move: 'R',
                    nextState: 'q1',
                    description: `Read '${symbol}' from SeqA position ${this.currentPosInSeq + 1}`
                };
            }
            if (symbol === '#') {
                this.phase = 'Comparison complete';
                return {
                    write: '#',
                    move: 'S',
                    nextState: 'qaccept',
                    description: 'Reached end of SeqA'
                };
            }
        }
        
        // q1: Move right to find first separator
        if (state === 'q1') {
            if (symbol === '#') {
                this.phase = 'Found first separator';
                return {
                    write: '#',
                    move: 'R',
                    nextState: 'q2',
                    description: 'Found first #, moving to SeqB'
                };
            }
            return {
                write: symbol,
                move: 'R',
                nextState: 'q1',
                description: 'Skipping through SeqA'
            };
        }
        
        // q2: Skip to the matching position in SeqB
        if (state === 'q2') {
            const positionsToSkip = this.currentPosInSeq;
            if (positionsToSkip === 0 || this.head >= this.seqBStart + this.currentPosInSeq) {
                // At the correct position in SeqB
                if ('ATCG'.includes(symbol)) {
                    const match = this.rememberedChar === symbol;
                    this.phase = `Compare: ${this.rememberedChar} ${match ? '=' : '≠'} ${symbol}`;
                    return {
                        write: symbol,
                        move: 'R',
                        nextState: 'q3',
                        description: `Read '${symbol}' from SeqB, comparing with '${this.rememberedChar}'`
                    };
                }
                if (symbol === '#') {
                    // SeqB ended, comparison complete
                    this.phase = 'SeqB ended';
                    return {
                        write: '#',
                        move: 'S',
                        nextState: 'qaccept',
                        description: 'SeqB ended'
                    };
                }
            }
            // Keep moving through SeqB to reach correct position
            return {
                write: symbol,
                move: 'R',
                nextState: 'q2',
                description: 'Moving to correct position in SeqB'
            };
        }
        
        // q3: Move right to find second separator
        if (state === 'q3') {
            if (symbol === '#') {
                this.phase = 'Found second separator';
                return {
                    write: '#',
                    move: 'R',
                    nextState: 'q4',
                    description: 'Found second #, moving to output section'
                };
            }
            return {
                write: symbol,
                move: 'R',
                nextState: 'q3',
                description: 'Skipping through SeqB'
            };
        }
        
        // q4: Move to correct output position
        if (state === 'q4') {
            // Calculate if we're at the correct output position
            const targetOutputPos = this.outputStart + this.currentPosInSeq;
            if (this.head >= targetOutputPos) {
                // Write the result
                const match = this.rememberedChar === this.tape[this.seqBStart + this.currentPosInSeq];
                const result = match ? '✓' : '✗';
                this.phase = `Writing ${result}`;
                return {
                    write: result,
                    move: 'L',
                    nextState: 'q5',
                    description: `Write '${result}' at output position ${this.currentPosInSeq + 1}`
                };
            }
            return {
                write: symbol,
                move: 'R',
                nextState: 'q4',
                description: 'Moving to output position'
            };
        }
        
        // q5: Return to start of tape
        if (state === 'q5') {
            if (this.head <= this.seqAStart + this.currentPosInSeq) {
                // Back at the starting position for next comparison
                this.currentPosInSeq++;
                this.phase = `Moving to position ${this.currentPosInSeq + 1}`;
                return {
                    write: symbol,
                    move: 'R',
                    nextState: 'q0',
                    description: `Ready for next comparison at position ${this.currentPosInSeq + 1}`
                };
            }
            return {
                write: symbol,
                move: 'L',
                nextState: 'q5',
                description: 'Returning to start'
            };
        }
        
        // Accept state
        return null;
    }
    
    /**
     * Execute one step
     */
    step() {
        if (this.currentState === 'qaccept') {
            return false;
        }
        
        const symbol = this.tape[this.head];
        const trans = this.transition(this.currentState, symbol);
        
        if (!trans) {
            this.currentState = 'qaccept';
            this.phase = 'Complete';
            return false;
        }
        
        this.tape[this.head] = trans.write;
        this.head += trans.move === 'R' ? 1 : (trans.move === 'L' ? -1 : 0);
        this.currentState = trans.nextState;
        this.stepCount++;
        
        return trans;
    }
    
    /**
     * Check if accepted
     */
    isAccepted() {
        return this.currentState === 'qaccept';
    }
    
    /**
     * Get output result
     */
    getOutput() {
        const outputLen = Math.min(this.seqA.length, this.seqB.length);
        return this.tape.slice(this.outputStart, this.outputStart + outputLen).join('');
    }
}

// Global variable for single-tape TM
let stm = null;
let singleRunning = false;
let singleInterval = null;

/**
 * Initialize single-tape Turing Machine
 */
function initializeSingleTape() {
    if (!tm) return;
    
    stm = new SingleTapeTuringMachine(tm.seqA, tm.seqB);
    renderSingleTape();
    updateSingleStatus();
    
    document.getElementById('singleTapeSection').style.display = 'block';
}

/**
 * Render single tape
 */
function renderSingleTape() {
    if (!stm) return;
    
    const tapeDiv = document.getElementById('singleTape');
    const headDiv = document.getElementById('singleHeadIndicator');
    
    tapeDiv.innerHTML = stm.tape.map((symbol, index) => {
        let cellClass = 'tape-cell';
        let displaySymbol = symbol === '_' ? '' : symbol;
        
        // Add active class for current head position
        if (index === stm.head) {
            cellClass += ' active';
        }
        
        // Separator styling
        if (symbol === '#') {
            cellClass += ' separator-cell';
        }
        
        // Color code output symbols
        if (symbol === '✓') {
            cellClass += ' match';
        } else if (symbol === '✗') {
            cellClass += ' mismatch';
        }
        
        // Color code nucleotides
        if ('ATCG'.includes(symbol)) {
            displaySymbol = `<span class="nucleotide-${symbol}">${symbol}</span>`;
        }
        
        const transitionSpeed = animationSpeed;
        return `<div class="${cellClass}" style="transition: all ${transitionSpeed}ms linear;">${displaySymbol}</div>`;
    }).join('');
    
    // Hide head indicator (arrow at top)
    if (headDiv) {
        headDiv.style.display = 'none';
    }
}

/**
 * Update single-tape status
 */
function updateSingleStatus() {
    if (!stm) return;
    
    document.getElementById('singleState').textContent = stm.currentState;
    document.getElementById('singleStep').textContent = stm.stepCount;
    document.getElementById('singlePhase').textContent = stm.phase;
}

/**
 * Step single-tape TM
 */
function stepSingleTape() {
    if (!stm || stm.isAccepted()) return;
    
    stm.step();
    renderSingleTape();
    updateSingleStatus();
    
    if (stm.isAccepted()) {
        pauseSingleTape();
    }
}

/**
 * Run single-tape TM
 */
function runSingleTape() {
    if (!stm || singleRunning) return;
    
    singleRunning = true;
    document.getElementById('singleRunBtn').disabled = true;
    document.getElementById('singlePauseBtn').disabled = false;
    document.getElementById('singleStepBtn').disabled = true;
    
    singleInterval = setInterval(() => {
        stepSingleTape();
        if (stm.isAccepted()) {
            pauseSingleTape();
        }
    }, animationSpeed);
}

/**
 * Pause single-tape TM
 */
function pauseSingleTape() {
    singleRunning = false;
    clearInterval(singleInterval);
    document.getElementById('singleRunBtn').disabled = false;
    document.getElementById('singlePauseBtn').disabled = true;
    document.getElementById('singleStepBtn').disabled = false;
}

/**
 * Reset single-tape TM
 */
function resetSingleTape() {
    pauseSingleTape();
    initializeSingleTape();
}

/**
 * Generate and display the complete transition history table after simulation completes
 */
function showTransitionHistoryTable() {
    if (!tm || !tm.transitionHistory || tm.transitionHistory.length === 0) {
        console.warn('No transition history available');
        return;
    }
    
    const tableSection = document.getElementById('transitionTableSection');
    const tableBody = document.getElementById('transitionTableBody');
    
    tableSection.style.display = 'block';
    
    // Helper function to format symbols
    const formatSymbol = (sym) => {
        if (!sym || sym === null || sym === undefined) return '<span style="color: #adb5bd;">—</span>';
        if (sym === '—' || sym === '-') return '<span style="color: #adb5bd;">—</span>';
        if (sym === '_') return '<span style="color: #adb5bd;">□</span>';
        if ('ATCG'.includes(sym)) return `<span class="nucleotide-${sym}">${sym}</span>`;
        if (sym === '✓') return '<span class="text-green-600 font-bold">✓</span>';
        if (sym === '✗') return '<span class="text-red-600 font-bold">✗</span>';
        return sym;
    };
    
    // Helper function to format head movements
    const formatMove = (move) => {
        const moves = {
            'R': '→',
            'L': '←',
            'S': '•'
        };
        return moves[move] || move;
    };
    
    // Build all table rows from transition history
    // Columns required:
    // current state | read tape 1 | read tape 2 | new state | write tape 1 | write tape 2 | move tape 1 | move tape 2
    const historyRows = tm.transitionHistory.map((transition, index) => {
        const isFirstRow = index === 0;
        const isLastRow = index === tm.transitionHistory.length - 1;
        let rowClass = '';
        if (isFirstRow) rowClass = 'start-state-row';
        else if (isLastRow) rowClass = 'halt-state-row';

    const read = Array.isArray(transition.read) ? transition.read : ['','',''];
    const write = Array.isArray(transition.displayWrite) ? transition.displayWrite : (Array.isArray(transition.write) ? transition.write : ['','','']);
    const move = Array.isArray(transition.move) ? transition.move : ['','',''];

        return `
            <tr class="${rowClass}">
                <td class="state-cell text-center">${transition.currentState || ''}</td>
                <td class="nucleotide-cell text-center">${formatSymbol(read[0])}</td>
                <td class="nucleotide-cell text-center">${formatSymbol(read[1])}</td>
                <td class="state-cell text-center">${transition.nextState || ''}</td>
                <td class="nucleotide-cell text-center">${formatSymbol(write[0])}</td>
                <td class="nucleotide-cell text-center">${formatSymbol(write[1])}</td>
                <td class="text-center">${formatMove(move[0])}</td>
                <td class="text-center">${formatMove(move[1])}</td>
            </tr>
        `;
    }).join('');

    tableBody.innerHTML = historyRows;
}

/**
 * Export results as text
 */
function exportResults() {
    if (!tm) return;
    
    const output = tm.getOutput();
    const matches = (output.match(/✓/g) || []).length;
    const mismatches = (output.match(/✗/g) || []).length;
    const total = matches + mismatches;
    const similarity = ((matches / total) * 100).toFixed(1);
    
    const text = `DNA SEQUENCE MATCHING RESULTS
=================================
Multi-Tape Turing Machine Simulation

Sequence A: ${tm.seqA}
Sequence B: ${tm.seqB}
Result:     ${output}

Statistics:
-----------
Total Steps: ${tm.stepCount}
Matches: ${matches}
Mismatches: ${mismatches}
Similarity: ${similarity}%

Generated: ${new Date().toLocaleString()}
`;
    
    // Create download
    const blob = new Blob([text], { type: 'text/plain' });
    const url = URL.createObjectURL(blob);
    const a = document.createElement('a');
    a.href = url;
    a.download = 'dna_match_results.txt';
    a.click();
    URL.revokeObjectURL(url);
}

// Initialize on page load
window.addEventListener('load', () => {
    // Set default values and initialize
    initializeSimulation();
});