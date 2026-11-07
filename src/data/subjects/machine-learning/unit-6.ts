import { Unit } from '@/types';

export const unit6Data: Unit = {
  id: 'unit-6',
  unitNumber: 6,
  title: 'Introduction to Neural Networks',
  shortTitle: 'Neural Networks',
  description: 'Comprehensive university examination study material covering Activation Functions, Single-Layer Perceptrons, Multilayer Perceptrons (MLP), the Backpropagation algorithm, Radial Basis Function (RBF) Networks, Functional Link ANN (FLANN), Recurrent Neural Networks (RNN), Convolutional Neural Networks (CNN), Convolution Padding, and Recommendation Systems.',
  syllabus: [
    'Biological Neuron vs Artificial Neuron & Basic Elements of ANN',
    'Activation Functions: Sigmoid, Tanh, ReLU, Threshold, and Importance',
    'Single-Layer Perceptron: Learning Rule, Linear Separability, and the XOR Problem',
    'Multilayer Perceptron (MLP) Architecture & Credit Assignment Problem',
    'Backpropagation Learning Algorithm: Mathematical Derivation, Deltas, and Convergence',
    'Radial Basis Function (RBF) Networks: Building Blocks, Gaussian Centers, and Two-Stage Training',
    'Functional Link Artificial Neural Network (FLANN) & Functional Expansion',
    'Recurrent Neural Networks (RNN): Feedback Loops, Time-Unfolding, and Architectures',
    'Applications and Limitations of RNNs: Vanishing/Exploding Gradients & LSTMs',
    'Convolutional Neural Networks (CNN): Architecture, Convolution, ReLU, Pooling, and Dense Layers',
    'Comparative Analysis: Convolutional Neural Networks (CNN) vs Recurrent Neural Networks (RNN)',
    'Types of Padding in CNNs: Valid Padding, Same Padding, and Full Padding',
    'Recommendation Systems: Content-Based vs Personalized (Collaborative Filtering)'
  ],
  questionPaperIndex: [
    { paper: 'Paper 1', qMain: '(a) → Q1 (Activation Functions), (b) → Q7, Q10 (RNN vs CNN), (c) → Q9 (CNN)', qOr: '(a) → Q6 (Backprop vs Feedforward), (b) → Q11 (Padding in CNN), (c) → Q9 (Conv & Pooling)' },
    { paper: 'Paper 2', qMain: '(a) → Q7 (RNN with Example), (b) → Q1 (Activation Functions), (c) → Q3 (MLP)', qOr: '(a) → Q5 (Building Blocks of RBF), (b) → Q12 (Recommendation Systems), (c) → Q9 (CNN with Example)' },
    { paper: 'Paper 3', qMain: '(a) → Q3 (MLP), (b) → Q1 (Activation Functions), (c) → Q9 (CNN)', qOr: '(a) → Q5 (Building Blocks of RBF), (b) → Q12 (Recommendation Systems), (c) → Q7 (RNN with Example)' },
    { paper: 'Paper 4', qMain: '(a) → Q2 (Single Layer NN), (b) → Q5 (RBF Networks), (c) → Q7, Q8 (RNN & Applications)', qOr: '(a) → Q4 (Backpropagation with Example), (b) → Q6 (FLANN and Merits), (c) → Q1 (Activation Functions)' },
    { paper: 'Paper 5', qMain: '(a) → Q2 (Building Blocks of ANN), (b) → Q4 (Backprop Characteristics), (c) → Q7, Q9 (RNN & CNN)', qOr: '(a) → Q2 (ANN based on Perceptron), (b) → Q3, Q4 (MLP & Why Backprop), (c) → Q1 (Two Activation Functions)' }
  ],
  quickRevision: {
    keyDefinitions: [
      { term: 'Activation Function', definition: 'A mathematical transfer function applied to a neuron\'s net weighted input (v = Σ w_i x_i + b) that introduces non-linearity and determines the neuron\'s output activation.' },
      { term: 'Perceptron', definition: 'The simplest artificial neural network model comprising input weights, a bias, a summing junction, and a threshold activation function; capable only of solving linearly separable problems.' },
      { term: 'Multilayer Perceptron (MLP)', definition: 'A feedforward artificial neural network with one or more hidden layers equipped with non-linear activation functions, acting as a universal function approximator.' },
      { term: 'Backpropagation', definition: 'A supervised learning algorithm that trains multi-layer networks by propagating output error gradients backwards using the calculus chain rule to update weights via gradient descent.' },
      { term: 'RBF Network', definition: 'A three-layer feedforward network that uses radially symmetric Gaussian basis functions in its single hidden layer to construct localized decision approximations.' },
      { term: 'FLANN', definition: 'Functional Link Artificial Neural Network; eliminates hidden layers by passing inputs through a non-linear functional expansion block (trigonometric/polynomial) before a single trainable layer.' },
      { term: 'Recurrent Neural Network (RNN)', definition: 'A neural network architecture with internal recurrent loops that maintains hidden state memory across sequential time steps, ideal for processing temporal and NLP data.' },
      { term: 'Convolutional Neural Network (CNN)', definition: 'A deep feedforward architecture designed for spatial 2D grid/image data utilizing local receptive fields, sliding filter kernels with shared weights, and pooling downsampling.' },
      { term: 'Zero Padding', definition: 'Adding symmetrical borders of zero-valued pixels around an image matrix prior to convolution to prevent spatial dimensionality shrinkage and border feature loss.' },
      { term: 'Collaborative Filtering', definition: 'A recommendation system approach that suggests items based on overlapping rating patterns and historical behaviors of similar users in the community.' }
    ],
    coreFormulas: [
      { name: 'Neuron Net Weighted Input', latex: 'v = \\sum_{i=1}^n w_i x_i + b' },
      { name: 'Logistic Sigmoid', latex: 'f(v) = \\frac{1}{1 + e^{-v}}, \\quad f\'(v) = f(v)(1 - f(v))' },
      { name: 'Hyperbolic Tangent (Tanh)', latex: 'f(v) = \\tanh(v) = \\frac{e^v - e^{-v}}{e^v + e^{-v}}, \\quad f\'(v) = 1 - f^2(v)' },
      { name: 'Rectified Linear Unit (ReLU)', latex: 'f(v) = \\max(0, v), \\quad f\'(v) = \\begin{cases} 1 & v > 0 \\\\ 0 & v < 0 \\end{cases}' },
      { name: 'Mean Squared Error Cost', latex: 'E = \\frac{1}{2} \\sum_{k=1}^m (t_k - y_k)^2' },
      { name: 'Backprop Output Delta', latex: '\\delta_k = (t_k - y_k) \\cdot f\'(y_{\\text{in}, k})' },
      { name: 'Backprop Hidden Delta', latex: '\\delta_j = \\left( \\sum_k \\delta_k v_{jk} \\right) f\'(z_{\\text{in}, j})' },
      { name: 'RBF Gaussian Activation', latex: '\\phi_j(X) = \\exp\\left( - \\frac{\\|X - \\mu_j\\|^2}{2\\sigma_j^2} \\right)' },
      { name: 'RNN Hidden State Update', latex: 'h_t = \\tanh(W_{hh} h_{t-1} + W_{xh} x_t + b_h)' },
      { name: 'Convolution Output Dimension', latex: 'W_{\\text{out}} = \\left\\lfloor \\frac{W - F + 2P}{S} \\right\\rfloor + 1' },
      { name: 'Same Padding Formula', latex: 'P = \\frac{F - 1}{2} \\quad (\\text{for stride } S=1)' },
      { name: 'Cosine Similarity', latex: '\\text{Sim}(u, i) = \\frac{\\vec{u} \\cdot \\vec{v}_i}{\\|\\vec{u}\\| \\|\\vec{v}_i\\|}' }
    ],
    comparisonHighlights: [
      { title: 'Sigmoid vs Tanh vs ReLU', summary: 'Sigmoid squashes to (0,1) with vanishing gradient. Tanh is zero-centered (-1,1) with faster convergence. ReLU avoids vanishing gradient for positive values and computes ultra-fast.' },
      { title: 'Single Layer vs Multilayer Perceptron', summary: 'Single Layer has no hidden units and fails completely on non-linearly separable problems like XOR. MLP has hidden layers and can approximate any continuous function.' },
      { title: 'MLP vs RBF Network', summary: 'MLP uses global sigmoidal hyperplanes and slow iterative backpropagation. RBF uses local Gaussian receptive fields and ultra-fast two-stage training (clustering + least squares).' },
      { title: 'CNN vs RNN', summary: 'CNN extracts spatial patterns from fixed-size grid image data using convolution and pooling. RNN processes variable-length sequential/time data using recurrent memory loops.' },
      { title: 'Content-Based vs Collaborative Filtering', summary: 'Content-based matches item attributes (no other-user dependency, but overspecialized). Collaborative uses community ratings (high serendipity, but suffers user cold-start).' }
    ],
    examTips: [
      'In university exams, always sketch the Perceptron computational graph: inputs x_i, weights w_i, bias b, summing node Σ, activation f(v), and output y.',
      'For Backpropagation, clearly divide your answer into the Forward Pass (signal computation) and Backward Pass (delta error propagation via chain rule).',
      'For CNN, memorize the layer pipeline: Conv -> ReLU -> Pool -> Conv -> ReLU -> Pool -> Flatten -> FC -> Softmax.',
      'State the XOR failure proof: XOR requires two linear decision boundaries; a single-layer perceptron provides only one straight line.',
      'For Padding, write down the formula W_out = floor((W - F + 2P)/S) + 1 and clearly distinguish Valid (P=0) from Same (output matches input size).'
    ]
  },
  questions: [
    {
      id: 'ml-u6-q1',
      unitId: 'unit-6',
      subjectId: 'machine-learning',
      qNumber: 1,
      title: 'Explain Activation Functions in Neural Networks: Importance, Types, and Detailed Comparison',
      shortTitle: 'Activation Functions: Importance & Types',
      marks: 8,
      importance: 'Frequently Asked',
      occurrenceCount: 5,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q7(a)', marks: 6 },
        { paper: 'Paper 2', questionNo: 'Q7(b)', marks: 6 },
        { paper: 'Paper 3', questionNo: 'Q7(b)', marks: 6 },
        { paper: 'Paper 4', questionNo: 'Q8(c)', marks: 6 },
        { paper: 'Paper 5', questionNo: 'Q8(c)', marks: 6 }
      ],
      syllabusTopics: ['Activation Functions', 'Sigmoid', 'Tanh', 'ReLU', 'Non-Linearity'],
      definition: 'An activation function (also called a transfer function) is a mathematical operation applied to the net weighted sum of inputs at a neuron: v = Σ (w_i * x_i) + b => y = f(v). It determines whether and to what magnitude a neuron should fire an active signal to subsequent downstream layers.',
      sections: [
        {
          title: '1. Why Activation Functions are Essential in Neural Networks',
          content: [
            '1. Introduces Non-Linearity: Without non-linear activation functions, stacking multiple linear dense layers collapses into a single linear combination: W_2(W_1 * x + b_1) + b_2 = W\' * x + b\'. Non-linearity allows ANNs to act as universal function approximators capable of learning complex, non-linear boundaries.',
            '2. Enables Backpropagation: Differentiable activation functions allow computing mathematical error gradients (∂E/∂w) using the chain rule to update weights via gradient descent.',
            '3. Bounds Output Range: Squashes unbounded weighted inputs into controlled intervals (e.g. [0, 1] or [-1, 1]), stabilizing numerical calculations and avoiding arithmetic explosion.',
            '4. Feature Selection & Sparsity: Functions like ReLU deactivate non-contributing neurons (setting output to 0), generating sparse representations that dramatically accelerate deep network inference.'
          ]
        },
        {
          title: '2. Prominent Activation Functions',
          content: [
            '• Binary Step / Threshold: f(v) = 1 if v >= θ, else 0. Used in early McCulloch-Pitts perceptrons. Discontinuous at θ with zero derivative everywhere else, making it completely incompatible with backpropagation.',
            '• Logistic Sigmoid: f(v) = 1 / (1 + e^(-v)), with derivative f\'(v) = f(v)(1 - f(v)). Squashes inputs smoothly into (0, 1). Ideal for binary classification probability outputs, but causes vanishing gradients for large |v| and is not zero-centered.',
            '• Hyperbolic Tangent (Tanh): f(v) = tanh(v) = (e^v - e^(-v)) / (e^v + e^(-v)), with derivative f\'(v) = 1 - f^2(v). Squashes inputs into (-1, 1). Being zero-centered allows gradients to update in both positive and negative directions, converging faster than Sigmoid.',
            '• Rectified Linear Unit (ReLU): f(v) = max(0, v), with derivative f\'(v) = 1 for v > 0, and 0 for v < 0. The modern standard for hidden layers. Avoids vanishing gradients for positive activations and computes with ultra-fast CPU/GPU efficiency.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-activation-functions',
          title: 'Comparison of Activation Functions: Sigmoid, Tanh, and ReLU',
          caption: 'Visual contrast illustrating the smooth (0,1) curve of Sigmoid, zero-centered (-1,1) S-curve of Tanh, and the ramp max(0,v) geometry of ReLU.',
          type: 'svg-interactive',
          svgType: 'activation-functions'
        }
      ],
      tables: [
        {
          headers: ['Function', 'Mathematical Range', 'Core Advantages', 'Key Limitations / Disadvantages'],
          rows: [
            { parameter: 'Sigmoid', col1: '(0, 1)', col2: 'Smooth, continuous probabilistic output for classification', col3: 'Vanishing gradient problem; outputs are strictly positive (not zero-centered)' },
            { parameter: 'Tanh', col1: '(-1, 1)', col2: 'Zero-centered outputs; stronger gradients than Sigmoid; faster convergence', col3: 'Still suffers from vanishing gradients at extreme positive and negative saturation tails' },
            { parameter: 'ReLU', col1: '[0, ∞)', col2: 'Extremely fast computation; completely avoids vanishing gradients for v > 0', col3: 'Dying ReLU problem: neurons stuck at 0 never activate if weights become excessively negative' },
            { parameter: 'Linear', col1: '(-∞, ∞)', col2: 'Preserves output magnitude in continuous regression tasks', col3: 'Cannot model non-linear decision surfaces; multi-layer stacks collapse into single linear layer' }
          ]
        }
      ],
      summary: [
        'Activation functions inject non-linearity, enabling ANNs to learn arbitrary complex boundaries.',
        'Sigmoid maps inputs to (0, 1) and is used for binary probabilities, but suffers from vanishing gradients.',
        'Tanh maps inputs to (-1, 1) and is zero-centered, speeding up gradient descent convergence.',
        'ReLU (max(0, v)) is the preferred modern standard for hidden layers due to speed and gradient propagation.'
      ],
      keyPoints: [
        'Non-linear universal approximation requirement',
        'Differentiability for backpropagation chain rule',
        'Sigmoid: (0, 1) range & vanishing gradient',
        'Tanh: zero-centered (-1, 1) range',
        'ReLU: max(0, v) and computational efficiency'
      ]
    },
    {
      id: 'ml-u6-q2',
      unitId: 'unit-6',
      subjectId: 'machine-learning',
      qNumber: 2,
      title: 'Explain Single Layer Neural Networks and Basic Elements of ANN. Detail the Biological vs Artificial Neuron Analogy and the XOR Limitation',
      shortTitle: 'Basic Elements of ANN & Perceptron Model',
      marks: 6,
      importance: 'Frequently Asked',
      occurrenceCount: 3,
      papersAsked: [
        { paper: 'Paper 4', questionNo: 'Q7(a)', marks: 6 },
        { paper: 'Paper 5', questionNo: 'Q7(a)', marks: 6 },
        { paper: 'Paper 5', questionNo: 'Q8(a)', marks: 6 }
      ],
      syllabusTopics: ['ANN Elements', 'Biological vs Artificial Neuron', 'Perceptron Learning Rule', 'XOR Problem'],
      definition: 'An Artificial Neural Network (ANN) is an interconnected computational architecture modeled after biological neurobiology. It consists of artificial neurons that compute weighted sums of inputs, incorporate an offset bias, and generate outputs via activation functions.',
      sections: [
        {
          title: '1. Primary Building Blocks of an Artificial Neuron',
          content: [
            '1. Input Signals (x_i): External numerical features or outputs from preceding layers.',
            '2. Synaptic Weights (w_i): Adaptive parameters representing connection strength and stored memory.',
            '3. Bias (b or w_0): An adjustable offset threshold allowing the activation curve to shift horizontally along the axis.',
            '4. Summing Junction (Σ): Computes the linear weighted combination: v = Σ (w_i * x_i) + b.',
            '5. Activation Function (f): Maps the linear sum into the neuron\'s final output state: y = f(v).'
          ]
        },
        {
          title: '2. Single Layer Perceptron & The Perceptron Learning Rule',
          content: [
            'Architecture: A single layer of input nodes connected directly to one or more output units without intermediate hidden layers.',
            'Learning Rule: Weights update iteratively based on prediction error:',
            '  Δw_i = η * (t - y) * x_i',
            '  w_i^(new) = w_i^(old) + Δw_i',
            'where η is the learning rate, t is the true target label, and y is the predicted output.',
            'The Fatal XOR Limitation: A single-layer perceptron can only separate patterns that are linearly separable by a single straight hyperplane. It completely fails on non-linearly separable problems like the XOR logic function, which led to the first AI winter until multi-layer networks emerged.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-artificial-neuron',
          title: 'Basic Computational Model of an Artificial Neuron (Perceptron)',
          caption: 'Diagram showing input vector x_i, synaptic weights w_i, bias b, summing junction Σ, activation transfer function f(v), and output y.',
          type: 'svg-interactive',
          svgType: 'artificial-neuron'
        }
      ],
      tables: [
        {
          headers: ['Biological Neuron Component', 'Artificial Neuron Equivalent', 'Biological & Computational Role'],
          rows: [
            { parameter: 'Soma (Cell Body)', col1: 'Summing Junction (Σ) / Node', col2: 'Integrates and aggregates all incoming electrical potential signals' },
            { parameter: 'Dendrites', col1: 'Input lines (x_1, x_2, ..., x_n)', col2: 'Receptive fibres that receive input signals from upstream neurons' },
            { parameter: 'Synapses', col1: 'Synaptic Weights (w_1, w_2, ..., w_n)', col2: 'Chemical junctions that scale signal strength (excitatory or inhibitory)' },
            { parameter: 'Axon', col1: 'Output transmission line', col2: 'Conducts the activated output pulse forward to subsequent neurons' },
            { parameter: 'Firing Threshold', col1: 'Bias (b) / Activation Threshold', col2: 'Determines whether the integrated sum exceeds the action potential trigger' }
          ]
        }
      ],
      summary: [
        'An artificial neuron mimics biology by calculating a weighted sum of inputs plus bias, passing it through an activation function.',
        'Biological components (soma, dendrites, synapses, axon) map to summing junction, inputs, weights, and output.',
        'Single-layer perceptrons use error-correction learning: Δw = η(t - y)x.',
        'Fatal limitation: Single-layer perceptrons can only classify linearly separable problems and fail on XOR.'
      ],
      keyPoints: [
        'Neuron building blocks: inputs, weights, bias, summing junction, activation',
        'Biological vs artificial neuron mapping',
        'Perceptron error-correction learning rule',
        'Linear separability constraint & XOR failure'
      ]
    },
    {
      id: 'ml-u6-q3',
      unitId: 'unit-6',
      subjectId: 'machine-learning',
      qNumber: 3,
      title: 'Explain Multilayer Perceptron (MLP) Architecture. Why are Hidden Layers Needed and Why is Backpropagation Required?',
      shortTitle: 'Multilayer Perceptron (MLP) & Hidden Layers',
      marks: 8,
      importance: 'Frequently Asked',
      occurrenceCount: 3,
      papersAsked: [
        { paper: 'Paper 2', questionNo: 'Q7(c)', marks: 6 },
        { paper: 'Paper 3', questionNo: 'Q7(a)', marks: 8 },
        { paper: 'Paper 5', questionNo: 'Q8(b)', marks: 6 }
      ],
      syllabusTopics: ['MLP Architecture', 'Hidden Layers', 'Credit Assignment Problem', 'Calculus Chain Rule'],
      definition: 'A Multilayer Perceptron (MLP) is a feedforward artificial neural network consisting of at least three layers: an input layer, one or more intermediate hidden layers with non-linear activation functions, and an output layer. Units are typically fully connected in a feedforward direction.',
      sections: [
        {
          title: '1. Why Hidden Layers are Essential',
          content: [
            'Overcoming Linear Inseparability: While single-layer perceptrons can only draw a single straight decision boundary, hidden neurons perform non-linear transformations on input features, projecting data into higher-dimensional spaces where complex problems (like XOR) become linearly separable.',
            'Hierarchical Feature Abstraction: In deep networks, early hidden layers extract simple low-level primitives (edges, gradients), middle layers compose textures and shapes, and deep layers capture abstract semantic concepts (faces, objects).'
          ]
        },
        {
          title: '2. Why the Backpropagation Algorithm is Required',
          content: [
            'The Credit Assignment Problem: In a single-layer network, updating weights is trivial because target labels t are known directly for each output node: e = (t - y). However, in an MLP with hidden layers, there are NO direct ground-truth targets for intermediate hidden neurons. It is impossible to know what raw values a hidden neuron "should" output.',
            'The Chain Rule Solution: The Backpropagation algorithm solves the credit assignment problem by applying the calculus chain rule (∂E/∂w = ∂E/∂y * ∂y/∂v * ∂v/∂w). It computes the error at the final output layer and propagates error gradients backward layer-by-layer, precisely determining how much each hidden synaptic weight contributed to the overall error.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-mlp-architecture',
          title: 'Architecture of a Multilayer Perceptron (MLP)',
          caption: 'Feedforward architecture showing Input Layer, Hidden Layer, Output Layer, forward signal propagation, and backward error gradient flow.',
          type: 'svg-interactive',
          svgType: 'mlp-architecture'
        }
      ],
      summary: [
        'MLP overcomes single-layer limits by inserting one or more non-linear hidden layers.',
        'Hidden layers map inputs into higher dimensions, solving non-linear problems like XOR.',
        'Backpropagation is mandatory because hidden units lack explicit training targets (Credit Assignment Problem).',
        'Backpropagation uses the calculus chain rule to distribute output errors backward to hidden weights.'
      ],
      keyPoints: [
        'Three-tier architecture: Input, Hidden, Output',
        'Non-linear boundary formation solving XOR',
        'The Credit Assignment Problem in hidden layers',
        'Calculus chain rule for backward gradient flow'
      ]
    },
    {
      id: 'ml-u6-q4',
      unitId: 'unit-6',
      subjectId: 'machine-learning',
      qNumber: 4,
      title: 'Explain the Backpropagation Learning Algorithm with Step-by-Step Mathematical Derivation and Key Characteristics',
      shortTitle: 'Backpropagation Algorithm & Mathematical Derivation',
      marks: 8,
      importance: 'Important',
      occurrenceCount: 2,
      papersAsked: [
        { paper: 'Paper 4', questionNo: 'Q8(a)', marks: 8 },
        { paper: 'Paper 5', questionNo: 'Q7(b)', marks: 8 }
      ],
      syllabusTopics: ['Backpropagation Algorithm', 'Forward Pass', 'Backward Pass', 'Delta Rule', 'Local Minima', 'Momentum'],
      definition: 'The Backpropagation algorithm (Rumelhart, Hinton, Williams, 1986) is a supervised learning method for training artificial neural networks. It optimizes synaptic weights using gradient descent on the squared error cost function: E = 1/2 * Σ (t_k - y_k)^2.',
      sections: [
        {
          title: '1. Two-Phase Operational Flow',
          content: [
            'Phase 1: Forward Pass — Input vectors propagate layer-by-layer through weights and activation functions to compute predicted output values y_k.',
            'Phase 2: Backward Pass — Output error (t_k - y_k) is calculated, transformed into error gradient deltas (δ), and backpropagated through hidden layers to calculate weight adjustments.'
          ]
        },
        {
          title: '2. Step-by-Step Backpropagation Algorithm',
          content: [
            'Step 1: Initialization — Initialize weights and biases to small random numbers near zero. Select learning rate η ∈ (0, 1].',
            'Step 2: Feedforward Phase —',
            '  Hidden inputs: z_in,j = b_0j + Σ x_i * w_ij, with activation z_j = f(z_in,j).',
            '  Output inputs: y_in,k = b_0k + Σ z_j * v_jk, with activation y_k = f(y_in,k).',
            'Step 3: Error Gradient Calculation —',
            '  Output layer delta: δ_k = (t_k - y_k) * f\'(y_in,k).',
            '  Hidden layer delta: δ_j = (Σ δ_k * v_jk) * f\'(z_in,j).',
            'Step 4: Weight and Bias Updates —',
            '  Output weights: Δv_jk = η * δ_k * z_j  =>  v_jk^(new) = v_jk + Δv_jk.',
            '  Hidden weights: Δw_ij = η * δ_j * x_i  =>  w_ij^(new) = w_ij + Δw_ij.',
            'Step 5: Convergence Check — Repeat for multiple epochs until total error E < ε or max epochs reached.'
          ]
        },
        {
          title: '3. Core Characteristics and Optimization Challenges',
          content: [
            'Differentiability Prerequisite: Activation functions must be continuous and differentiable everywhere (e.g. Sigmoid, Tanh, ReLU).',
            'Local Minima Vulnerability: The non-convex error surface can cause gradient descent to get trapped in sub-optimal local minima.',
            'Momentum Acceleration (α): Adding a momentum term (Δw(t) = η * δ * x + α * Δw(t-1)) dampens high-frequency oscillations across steep ravines and accelerates through flat plateau regions.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-backprop-flow',
          title: 'Forward Pass and Backward Error Delta Flow in Backpropagation',
          caption: 'Visual workflow showing forward signal propagation from inputs to outputs, and backward propagation of error gradients (δ_k, δ_j) using the calculus chain rule.',
          type: 'svg-interactive',
          svgType: 'backprop-flow'
        }
      ],
      summary: [
        'Backpropagation alternates between a forward pass (signal calculation) and backward pass (gradient propagation).',
        'Uses gradient descent on squared error: E = 0.5 * Σ(t_k - y_k)^2.',
        'Output delta: δ_k = (t_k - y_k)f\'(y_in,k); Hidden delta: δ_j = (Σ δ_k v_jk)f\'(z_in,j).',
        'Requires differentiable activations and can get trapped in local minima (mitigated by momentum).'
      ],
      keyPoints: [
        'Gradient descent on mean squared error',
        'Forward pass signal propagation',
        'Backward pass delta error gradient calculation',
        'Calculus chain rule weight update equations',
        'Momentum acceleration against local minima'
      ]
    },
    {
      id: 'ml-u6-q5',
      unitId: 'unit-6',
      subjectId: 'machine-learning',
      qNumber: 5,
      title: 'Explain Radial Basis Function (RBF) Networks: Building Blocks, Two-Stage Training, and Comparison with MLP',
      shortTitle: 'Radial Basis Function (RBF) Networks',
      marks: 8,
      importance: 'Frequently Asked',
      occurrenceCount: 3,
      papersAsked: [
        { paper: 'Paper 2', questionNo: 'Q8(a)', marks: 6 },
        { paper: 'Paper 3', questionNo: 'Q8(a)', marks: 6 },
        { paper: 'Paper 4', questionNo: 'Q7(b)', marks: 8 }
      ],
      syllabusTopics: ['RBF Networks', 'Gaussian Basis Functions', 'Euclidean Distance', 'Two-Stage Training', 'RBF vs MLP'],
      definition: 'A Radial Basis Function (RBF) Network is a specialized feedforward artificial neural network that uses radially symmetric basis functions (typically Gaussian curves) as activation functions in its single hidden layer. It is widely used for function approximation, time-series prediction, and classification.',
      sections: [
        {
          title: '1. The Three Architectural Building Blocks',
          content: [
            '1. Input Layer: Passive distributor nodes that pass the n-dimensional input vector X = [x_1, x_2, ..., x_n]^T to hidden nodes without applying weights or transformations.',
            '2. Hidden Layer (Non-linear RBF Units): Each hidden unit represents a cluster prototype center μ_j and applies a localized Gaussian radial function:',
            '  φ_j(X) = exp( - ||X - μ_j||^2 / (2 * σ_j^2) )',
            'where ||X - μ_j|| is the Euclidean distance from the input to center μ_j, and σ_j is the spread/width parameter.',
            '3. Output Layer (Linear Units): Computes a simple linear weighted sum of the hidden activations:',
            '  y = Σ (w_j * φ_j(X)) + b.'
          ]
        },
        {
          title: '2. Two-Stage Fast Training Methodology',
          content: [
            'Unlike MLPs where all layers train simultaneously via slow iterative backpropagation, RBF networks use a decoupled two-stage training scheme:',
            '• Stage 1 (Unsupervised): Determine the cluster centers μ_j and widths σ_j of hidden neurons using unsupervised k-means clustering.',
            '• Stage 2 (Supervised): Determine the output layer weights w_j directly using linear Least Squares / Moore-Penrose Pseudo-inverse in a single closed-form step without iterative epochs.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-rbf-network',
          title: 'Architecture of a Radial Basis Function (RBF) Network',
          caption: 'Diagram showing Input Layer, single Hidden Layer of localized Gaussian RBF units φ_j(X), and linear output summation unit Σ.',
          type: 'svg-interactive',
          svgType: 'rbf-network'
        }
      ],
      tables: [
        {
          headers: ['Comparison Attribute', 'Radial Basis Function (RBF) Network', 'Multilayer Perceptron (MLP)'],
          rows: [
            { parameter: 'Number of Hidden Layers', col1: 'Strictly exactly ONE hidden layer', col2: 'Can possess one or many hidden layers (deep networks)' },
            { parameter: 'Approximation Type', col1: 'Local approximation: units activate only when input is close to center μ_j', col2: 'Global approximation: sigmoidal units partition entire input space across hyperplanes' },
            { parameter: 'Hidden Unit Activation', col1: 'Non-linear function based on Euclidean distance: ||X - μ||', col2: 'Non-linear function based on inner product of inputs and weights: W^T X + b' },
            { parameter: 'Output Layer Unit', col1: 'Strictly linear summation units', col2: 'Can be linear or non-linear activation units' },
            { parameter: 'Training Speed & Convergence', col1: 'Extremely fast: 2-stage training (k-means clustering + least squares)', col2: 'Slow: iterative backpropagation requiring hundreds of epochs' }
          ]
        }
      ],
      summary: [
        'RBF Networks consist of 3 layers: Input, a single Gaussian RBF hidden layer, and a linear output layer.',
        'Hidden nodes calculate Euclidean distance from prototype centers: φ(X) = exp(-||X - μ||^2 / 2σ^2).',
        'Trained in two rapid stages: k-means for centers, and least squares pseudo-inverse for output weights.',
        'Provides local receptive approximations, training far faster than global sigmoidal MLPs.'
      ],
      keyPoints: [
        'Strict three-layer feedforward architecture',
        'Gaussian radially symmetric activation',
        'Euclidean distance metric ||X - μ||',
        'Two-stage fast training (k-means + least squares)',
        'Local vs global decision approximation'
      ]
    },
    {
      id: 'ml-u6-q6',
      unitId: 'unit-6',
      subjectId: 'machine-learning',
      qNumber: 6,
      title: 'Explain Functional Link Artificial Neural Network (FLANN). Detail its Functional Expansion, Merits over MLPs, and Compare FFN vs BPN',
      shortTitle: 'FLANN Architecture & Merits over MLPs',
      marks: 6,
      importance: 'Important',
      occurrenceCount: 2,
      papersAsked: [
        { paper: 'Paper 4', questionNo: 'Q8(b)', marks: 6 },
        { paper: 'Paper 1', questionNo: 'Q8(a)', marks: 6 }
      ],
      syllabusTopics: ['FLANN Architecture', 'Functional Expansion Φ(X)', 'Merits over Multilayer ANNs', 'FFN vs BPN'],
      definition: 'A Functional Link Artificial Neural Network (FLANN) is a single-layer feedforward neural network that eliminates hidden layers entirely while retaining the ability to solve non-linear classification and regression problems by passing inputs through an initial non-linear Functional Expansion Block.',
      sections: [
        {
          title: '1. Architecture & Working of FLANN',
          content: [
            'Non-Linear Enhancement: Standard single-layer perceptrons fail on non-linear data due to lack of capacity. FLANN solves this by expanding original input coordinates into a higher-dimensional feature space before applying a single layer of trainable weights.',
            'Functional Expansion: If original input is X = [x_1, x_2]^T, the functional expansion block generates expanded vectors using orthogonal polynomials, trigonometric series, or cross-products:',
            '  Φ(X) = [1, x_1, sin(π*x_1), cos(π*x_1), x_2, sin(π*x_2), cos(π*x_2), x_1*x_2]^T.',
            'Output Calculation: The output is computed simply as y = f( Σ w_j * Φ_j(X) ).'
          ]
        },
        {
          title: '2. Merits of FLANN over Multilayer Perceptrons',
          content: [
            '1. Drastically Lower Computational Complexity: Eliminates hidden layers, avoiding computationally expensive layer-by-layer delta backpropagation.',
            '2. Fast Convergence: Because the output layer is linear or uses simple delta rules on expanded features, training converges substantially faster than multi-layer backpropagation.',
            '3. No Local Minima Trapping: The error surface of a single layer with convex loss functions is strictly convex, eliminating the risk of getting trapped in sub-optimal local minima.',
            '4. Zero Hidden Hyperparameter Guesswork: Completely eliminates the need to empirically tune the number of hidden layers or number of hidden neurons.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-flann-architecture',
          title: 'Functional Link Artificial Neural Network (FLANN) Architecture',
          caption: 'Diagram showing input vector X passed through a Functional Expansion Block Φ(X), followed by a single summing junction Σ and activation function.',
          type: 'svg-interactive',
          svgType: 'flann-architecture'
        }
      ],
      tables: [
        {
          headers: ['Comparison Parameter', 'Feedforward Network (FFN)', 'Backpropagation Network (BPN)'],
          rows: [
            { parameter: 'Conceptual Definition', col1: 'Structural topological class where connections flow strictly in one direction (input to output)', col2: 'A specific supervised gradient descent training algorithm applied to multilayer networks' },
            { parameter: 'Signal Directionality', col1: 'Signals move strictly forward; zero feedback loops or cycles exist', col2: 'Signals move forward to produce output; error gradients move backward to update weights' },
            { parameter: 'Hidden Layer Presence', col1: 'Can be single-layer (Perceptron) or multi-layer (MLP)', col2: 'Must possess at least one or more hidden layers to propagate error deltas' },
            { parameter: 'Learning Rule', col1: 'Describes topology; can utilize any learning rule (Hebbian, Delta, Perceptron)', col2: 'Strictly uses gradient descent on mean squared error via the calculus chain rule' }
          ]
        }
      ],
      summary: [
        'FLANN eliminates hidden layers by projecting inputs into higher dimensions via a functional expansion block.',
        'Uses trigonometric or orthogonal polynomial expansions: Φ(X) = [x_1, sin(πx_1), cos(πx_1), x_1*x_2].',
        'Avoids local minima traps and expensive backpropagation overhead.',
        'FFN defines feedforward network topology; BPN defines the error-propagation training algorithm.'
      ],
      keyPoints: [
        'Single-layer non-linear classification via expansion',
        'Trigonometric and polynomial expansion block Φ(X)',
        'Convex error surface avoiding local minima',
        'Feedforward Network (FFN) vs Backpropagation Network (BPN)'
      ]
    },
    {
      id: 'ml-u6-q7',
      unitId: 'unit-6',
      subjectId: 'machine-learning',
      qNumber: 7,
      title: 'Explain Recurrent Neural Networks (RNN): Concept, Feedback Loops, Unfolding in Time, Types, and Concrete Example',
      shortTitle: 'Recurrent Neural Networks (RNN) Architecture',
      marks: 8,
      importance: 'Frequently Asked',
      occurrenceCount: 5,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q7(b)', marks: 6 },
        { paper: 'Paper 2', questionNo: 'Q7(a)', marks: 8 },
        { paper: 'Paper 3', questionNo: 'Q8(c)', marks: 6 },
        { paper: 'Paper 4', questionNo: 'Q7(c)', marks: 8 },
        { paper: 'Paper 5', questionNo: 'Q7(c)', marks: 6 }
      ],
      syllabusTopics: ['RNN Concept', 'Feedback Loops', 'Hidden State Update', 'Time-Unfolding', 'Sequential Types'],
      definition: 'A Recurrent Neural Network (RNN) is a specialized class of artificial neural networks designed for processing sequential, time-series, and natural language data. Unlike standard feedforward networks where all inputs are assumed independent, an RNN incorporates recurrent feedback loops that act as an internal memory, allowing information from prior time-steps to persist.',
      sections: [
        {
          title: '1. Working Principle and Time-Unfolding Equations',
          content: [
            'At each discrete time step t, the RNN receives the current external input x_t and combines it with the hidden state vector from the previous step h_(t-1):',
            '  Hidden State Update: h_t = tanh( W_hh * h_(t-1) + W_xh * x_t + b_h )',
            '  Output Prediction: y_t = Softmax( W_hy * h_t + b_y )',
            'Parameter Sharing: The weight matrices W_xh (input-to-hidden), W_hh (hidden-to-hidden recurrence), and W_hy (hidden-to-output) are shared across all time steps, allowing the network to handle sequences of arbitrary length.'
          ]
        },
        {
          title: '2. Concrete Example: Next Character Prediction in "HELLO"',
          content: [
            'Step 1: When input x_1 = \'H\' is presented, hidden state h_1 encodes \'H\'.',
            'Step 2: When x_2 = \'E\' is received, state h_2 merges \'E\' with the context memory of \'H\' from h_1.',
            'Step 3: When x_3 = \'L\' arrives, the network predicts the second \'L\'.',
            'Step 4: When the second \'L\' arrives, internal memory of the previous letters enables distinguishing the first \'L\' (which is followed by \'L\') from the second \'L\' (which must be followed by \'O\'). A standard feedforward network would fail because it cannot retain sequential order.'
          ]
        },
        {
          title: '3. Architectural Types of RNNs',
          content: [
            '• One-to-One: Standard non-sequential classification (e.g. static image classification).',
            '• One-to-Many: Single input yields a sequence of outputs (e.g. Image Captioning: image -> descriptive text sentence).',
            '• Many-to-One: Sequence of inputs yields a single output (e.g. Sentiment Analysis: text review -> positive/negative rating).',
            '• Many-to-Many: Sequence input produces sequence output (e.g. Machine Translation: English sentence -> French sentence; video classification).'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-rnn-unfolded',
          title: 'Recurrent Neural Network (RNN): Folded Loop & Time-Unfolded Graph',
          caption: 'Diagram illustrating the folded recurrent representation and the time-unfolded sequence graph across time steps t-1, t, and t+1 with shared recurrence weights W_hh.',
          type: 'svg-interactive',
          svgType: 'rnn-unfolded'
        }
      ],
      summary: [
        'RNNs process sequential data using internal feedback loops that maintain historical memory.',
        'Hidden state update: h_t = tanh(W_hh * h_(t-1) + W_xh * x_t + b_h).',
        'Parameters are shared across all time steps, accommodating arbitrary sequence lengths.',
        'Supports one-to-many, many-to-one, and many-to-many topologies for text and time series.'
      ],
      keyPoints: [
        'Internal recurrent feedback loops',
        'Hidden state vector h_t acting as sequential memory',
        'Parameter sharing across all time steps',
        'Time-unfolding computational graph',
        'Sequential classification topologies (One-to-Many, Many-to-Many)'
      ]
    },
    {
      id: 'ml-u6-q8',
      unitId: 'unit-6',
      subjectId: 'machine-learning',
      qNumber: 8,
      title: 'Discuss the Real-World Applications and Critical Limitations of Recurrent Neural Networks (RNNs). How Do LSTMs Overcome Them?',
      shortTitle: 'RNN Applications, Limitations & LSTMs',
      marks: 6,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 4', questionNo: 'Q7(c)', marks: 6 }
      ],
      syllabusTopics: ['RNN Applications', 'Vanishing & Exploding Gradients', 'BPTT', 'LSTM & GRU Gating'],
      definition: 'While Recurrent Neural Networks provide foundational capabilities for sequential pattern modeling, their practical deployment in long-horizon tasks is constrained by fundamental gradient decay dynamics during Backpropagation Through Time (BPTT).',
      sections: [
        {
          title: '1. Prominent Real-World Applications of RNNs',
          content: [
            '1. Natural Language Processing (NLP): Part-of-speech tagging, Named Entity Recognition (NER), text completion, and conversational chatbots.',
            '2. Speech Recognition: Translating continuous acoustic human audio waveforms into phonemes and text sequences.',
            '3. Machine Translation: Automated end-to-end language translation (e.g. Google Translate translating English to Hindi).',
            '4. Time Series & Financial Forecasting: Stock price trajectory prediction, electrical grid load forecasting, and meteorological weather modeling.',
            '5. Sentiment Analysis: Evaluating chronological customer product reviews or movie feedback to classify sentiment as positive or negative.'
          ]
        },
        {
          title: '2. Critical Limitations of Standard RNNs',
          content: [
            '• The Vanishing Gradient Problem: When unfolded across many time steps, gradients exponentially decay as they propagate backwards through time (BPTT). Consequently, standard RNNs cannot learn long-term dependencies separated by more than 8-10 time steps.',
            '• Exploding Gradients: Gradients can multiply exponentially, leading to numerical overflow and erratic weight updates (mitigated via gradient clipping).',
            '• Sequential Bottleneck: Because computation at step t strictly requires the hidden state from t-1, RNNs cannot be parallelized across time steps on modern GPUs.',
            '• The Modern Solution (LSTMs & GRUs): Long Short-Term Memory (LSTM) networks resolve vanishing gradients using a dedicated Cell State regulated by three multiplicative gates (Forget Gate, Input Gate, Output Gate) that maintain constant error carousels.'
          ]
        }
      ],
      summary: [
        'RNNs power NLP, speech recognition, machine translation, and time-series forecasting.',
        'Standard RNNs suffer from vanishing gradients during Backpropagation Through Time (BPTT).',
        'Cannot retain long-term historical context beyond 8-10 time steps.',
        'LSTMs and GRUs resolve this using cell state gating mechanisms (forget, input, output gates).'
      ],
      keyPoints: [
        'Sequential applications in NLP, speech, and finance',
        'Vanishing gradient problem in long sequences',
        'Backpropagation Through Time (BPTT) limitations',
        'LSTM & GRU constant error carousel gating solutions'
      ]
    },
    {
      id: 'ml-u6-q9',
      unitId: 'unit-6',
      subjectId: 'machine-learning',
      qNumber: 9,
      title: 'Explain Convolutional Neural Networks (CNN): Architecture, Core Layers (Convolution, ReLU, Pooling, FC), and Working Mechanism',
      shortTitle: 'Convolutional Neural Networks (CNN) Architecture',
      marks: 10,
      importance: 'Frequently Asked',
      occurrenceCount: 5,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q7(c)', marks: 6 },
        { paper: 'Paper 1', questionNo: 'Q8(c)', marks: 6 },
        { paper: 'Paper 2', questionNo: 'Q8(c)', marks: 8 },
        { paper: 'Paper 3', questionNo: 'Q7(c)', marks: 8 },
        { paper: 'Paper 5', questionNo: 'Q7(c)', marks: 6 }
      ],
      syllabusTopics: ['CNN Architecture', 'Convolution Layer', 'Kernel Filters', 'Weight Sharing', 'ReLU', 'Max Pooling', 'Fully Connected Layer'],
      definition: 'A Convolutional Neural Network (CNN or ConvNet) is a specialized deep feedforward learning architecture engineered specifically to process multi-dimensional grid-structured data such as 2D images. Rather than connecting every pixel to every neuron, CNNs exploit local spatial correlations using parameter sharing and local receptive fields.',
      sections: [
        {
          title: '1. Layer-by-Layer Architecture of a CNN',
          content: [
            '1. Convolutional Layer: The core feature extractor. Learnable 2D filter kernels (e.g. 3x3 or 5x5) slide across the input image, computing the element-wise dot product between kernel weights and local pixel patches:',
            '  S(i, j) = (I * K)(i, j) = Σ Σ I(i - m, j - n) * K(m, n).',
            '  • Local Connectivity: Neurons connect only to a small receptive patch.',
            '  • Parameter / Weight Sharing: The same kernel weights are reused across the entire image, drastically slashing parameter counts.',
            '2. Activation Layer (ReLU): Follows convolution: f(x) = max(0, x). Injects non-linearity without altering the spatial dimensions.',
            '3. Pooling Layer (Downsampling): Reduces spatial dimensions (height and width) of feature maps to lower computational complexity, memory usage, and prevent overfitting.',
            '  • Max Pooling: Selects the maximum value within a window (e.g. 2x2 filter with stride 2 downsamples area by 75%). Provides translational invariance.',
            '  • Average Pooling: Averages values within the pooling window.',
            '4. Fully Connected (FC) Layer: At the end of the feature extraction hierarchy, feature maps are flattened into a 1D vector and fed into standard dense layers to output class probabilities using Softmax.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-cnn-pipeline',
          title: 'Standard End-to-End Convolutional Neural Network (CNN) Pipeline',
          caption: 'Visual workflow showing Input Image -> Conv + ReLU -> Max Pooling -> Conv + ReLU -> Pooling -> Flatten -> Fully Connected Dense -> Softmax Output.',
          type: 'svg-interactive',
          svgType: 'cnn-pipeline'
        },
        {
          id: 'diag-max-pooling',
          title: '2x2 Max Pooling Operation with Stride 2',
          caption: 'Downsampling matrix transforming a 4x4 intermediate feature map into a 2x2 pooled matrix by selecting the maximum activation in each quadrant.',
          type: 'svg-interactive',
          svgType: 'max-pooling'
        }
      ],
      summary: [
        'CNNs process spatial 2D grid data using parameter sharing and local receptive fields.',
        'Convolution layer extracts local features using learnable sliding filter kernels.',
        'ReLU provides non-linear activation; Pooling downsamples dimensions and yields translation invariance.',
        'Flattened features are classified by final Fully Connected layers via Softmax.'
      ],
      keyPoints: [
        'Local connectivity and weight sharing principles',
        '2D convolution operation (I * K)',
        'Max pooling dimensional reduction & translation invariance',
        'Flattening and dense fully connected classification'
      ]
    },
    {
      id: 'ml-u6-q10',
      unitId: 'unit-6',
      subjectId: 'machine-learning',
      qNumber: 10,
      title: 'Provide a Detailed Comparative Analysis Between Recurrent Neural Networks (RNN) and Convolutional Neural Networks (CNN)',
      shortTitle: 'CNN vs RNN Comparative Analysis',
      marks: 6,
      importance: 'Important',
      occurrenceCount: 2,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q7(b)', marks: 6 },
        { paper: 'Paper 5', questionNo: 'Q7(c)', marks: 6 }
      ],
      syllabusTopics: ['CNN vs RNN', 'Spatial vs Temporal', 'Data Dimensions', 'Recurrent Loops vs Feedforward'],
      definition: 'Convolutional Neural Networks (CNN) and Recurrent Neural Networks (RNN) represent the two premier deep learning architectures. CNNs excel at extracting spatial hierarchies from grid data, while RNNs specialize in capturing temporal patterns across sequential time-series data.',
      sections: [
        {
          title: '1. Contrasting Structural and Computational Paradigms',
          content: [
            'Spatial vs Temporal: CNNs treat inputs as fixed-size spatial tensors where relationships depend on spatial proximity (pixels). RNNs treat inputs as dynamic temporal vectors where order and timing define meaning.',
            'Parallelization: CNNs parallelize easily on GPUs across pixels and filters. Standard RNNs suffer from a sequential bottleneck where step t strictly depends on step t-1.'
          ]
        }
      ],
      tables: [
        {
          headers: ['Comparison Attribute', 'Convolutional Neural Network (CNN)', 'Recurrent Neural Network (RNN)'],
          rows: [
            { parameter: 'Primary Application Domain', col1: 'Spatial / Grid data (Images, Video frames, 2D signals)', col2: 'Sequential / Temporal data (Text, Audio, Time-series)' },
            { parameter: 'Network Architecture Topology', col1: 'Feedforward architecture without cycles or recurrent memory loops', col2: 'Contains recurrent feedback loops that feed prior state into next step' },
            { parameter: 'Input Data Dimensions', col1: 'Fixed-size multidimensional tensors (Height x Width x Channels)', col2: 'Variable-length sequential vectors (x_1, x_2, ..., x_t)' },
            { parameter: 'Foundational Mechanism', col1: 'Convolution & Pooling using shared spatial filter kernels', col2: 'Hidden memory state (h_t) updated iteratively across time steps' },
            { parameter: 'Training Algorithm', col1: 'Standard Backpropagation via gradient descent', col2: 'Backpropagation Through Time (BPTT)' },
            { parameter: 'GPU Parallel Processing', col1: 'Highly parallelizable across image patches and filters', col2: 'Strictly sequential; step t must wait for step t-1 computation' },
            { parameter: 'Typical Real-World Uses', col1: 'Face recognition, autonomous driving vision, tumor segmentation', col2: 'Machine translation, speech-to-text, sentiment analysis, stock prediction' }
          ]
        }
      ],
      summary: [
        'CNNs process spatial 2D grid image data using feedforward convolutions and pooling.',
        'RNNs process variable-length temporal sequences using recurrent memory loops.',
        'CNNs parallelize efficiently on GPUs; RNNs compute sequentially step-by-step.',
        'CNN uses standard backpropagation; RNN uses Backpropagation Through Time (BPTT).'
      ],
      keyPoints: [
        'Spatial grid features vs temporal sequential memory',
        'Feedforward convolutional filters vs recurrent loops',
        'Fixed tensor size vs variable sequence length',
        'GPU parallelization vs sequential computing bottleneck'
      ]
    },
    {
      id: 'ml-u6-q11',
      unitId: 'unit-6',
      subjectId: 'machine-learning',
      qNumber: 11,
      title: 'Explain the Types of Padding Used in Convolutional Neural Networks. Why is Padding Required?',
      shortTitle: 'Padding Types in Convolutional Neural Networks',
      marks: 6,
      importance: 'Important',
      occurrenceCount: 1,
      papersAsked: [
        { paper: 'Paper 1', questionNo: 'Q8(b)', marks: 6 }
      ],
      syllabusTopics: ['Convolution Padding', 'Feature Map Shrinkage', 'Border Information Loss', 'Valid Padding', 'Same Padding', 'Full Padding'],
      definition: 'Padding refers to the process of surrounding the outer borders of an input image matrix with artificial pixels (typically zeros) prior to applying convolution filters, controlling the spatial size of output feature maps.',
      sections: [
        {
          title: '1. Why Padding is Necessary in Deep CNNs',
          content: [
            'Without padding, when an F x F filter convolves over a W x W image with stride S, the output dimension is given by: W_out = floor((W - F) / S) + 1.',
            'Two major pathologies arise without padding:',
            '1. Shrinking Feature Maps: After each successive convolution layer, spatial dimensions shrink (e.g. 32x32 -> 28x28 -> 24x24). This makes it mathematically impossible to construct deep architectures with dozens or hundreds of layers.',
            '2. Border Information Loss: Corner and edge pixels are overlapped far fewer times by the sliding filter than central pixels, causing valuable boundary features to be progressively discarded.'
          ]
        },
        {
          title: '2. The Three Primary Types of Padding',
          content: [
            '1. Valid Padding (No Padding, P = 0):',
            '  • Zero artificial pixels are added to boundaries. The filter only visits positions where it fits entirely inside the input matrix.',
            '  • Output spatial dimensions strictly shrink: W_out = floor((W - F) / S) + 1.',
            '2. Same Padding (Half Padding):',
            '  • Zeros are padded symmetrically around edges such that the output feature map has the identical spatial dimension as the input (W_out = W).',
            '  • Required padding for stride S = 1: P = (F - 1) / 2. For a 3x3 filter, P = 1; for a 5x5 filter, P = 2.',
            '3. Full Padding:',
            '  • Zeros are added such that the filter kernel just touches a single corner pixel of the input matrix.',
            '  • Padding P = F - 1. The output spatial size expands: W_out = W + F - 1.'
          ]
        }
      ],
      diagrams: [
        {
          id: 'diag-cnn-padding',
          title: 'Zero-Padding of Size P = 1 Surrounding a 4x4 Input Image',
          caption: 'Matrix diagram illustrating a 4x4 input grid surrounded by a symmetrical outer border of zero-valued pixels (P=1), expanding the convolving field to 6x6.',
          type: 'svg-interactive',
          svgType: 'cnn-padding'
        }
      ],
      numericalSolution: {
        problemSummary: 'Calculate output feature map spatial dimensions for a 32x32 input image convolved with a 5x5 filter across Valid, Same, and Full padding.',
        givenData: [
          { label: 'Input Width (W)', value: '32 pixels' },
          { label: 'Input Height (H)', value: '32 pixels' },
          { label: 'Filter Size (F)', value: '5 x 5' },
          { label: 'Stride (S)', value: '1 (and 2)' }
        ],
        toFind: [
          'Universal Dimension Formula: W_out = ⌊(W - F + 2P)/S⌋ + 1',
          'Output size under Valid Padding (P = 0)',
          'Required padding P and output size under Same Padding (W_out = W)',
          'Output size under Full Padding (P = F - 1)',
          'Output size under Same Padding with Stride S = 2'
        ],
        steps: [
          {
            stepNumber: 1,
            title: 'State Universal CNN Output Dimension Formula',
            explanation: 'The spatial output dimensions (width and height) of a 2D convolution layer are dictated by input dimension W, filter size F, padding P, and stride S.',
            formula: 'W_{out} = \\left\\lfloor \\frac{W - F + 2P}{S} \\right\\rfloor + 1',
            result: 'Universal Dimension Equation established',
            tip: 'Always state the floor bracket ⌊ ⌋ in university exams to account for fractional stride steps.'
          },
          {
            stepNumber: 2,
            title: 'Case 1: Calculate Output for Valid Padding (P = 0, S = 1)',
            explanation: 'Under Valid Padding, no border pixels are added (P = 0). The filter strictly slides within the bounds of the original 32x32 image.',
            formula: 'W_{valid} = \\frac{W - F + 2(0)}{S} + 1',
            substitution: 'W_{valid} = \\frac{32 - 5 + 0}{1} + 1 = 27 + 1 = 28',
            result: '28 x 28 feature map',
            tip: 'Notice that without padding, 4 spatial pixels (F - 1 = 5 - 1 = 4) are permanently lost from width and height in a single convolution layer!'
          },
          {
            stepNumber: 3,
            title: 'Case 2: Derive Required Padding for Same Padding (W_out = W, S = 1)',
            explanation: 'To maintain identical spatial dimensions (W_out = 32), set W_out = W in the formula and solve for P.',
            formula: 'W = \\frac{W - F + 2P}{1} + 1 \\implies 2P = F - 1 \\implies P = \\frac{F - 1}{2}',
            substitution: 'P = \\frac{5 - 1}{2} = \\frac{4}{2} = 2 \\text{ pixels of zero padding on all sides}',
            calculation: 'W_{same} = \\frac{32 - 5 + 2(2)}{1} + 1 = \\frac{32 - 5 + 4}{1} + 1 = \\frac{31}{1} + 1 = 32',
            result: 'Padding P = 2 pixels ==> Output = 32 x 32 feature map',
            tip: 'Same padding requires odd-sized filter kernels (3x3, 5x5, 7x7) so that (F - 1) is cleanly divisible by 2.'
          },
          {
            stepNumber: 4,
            title: 'Case 3: Calculate Output for Full Padding (P = F - 1, S = 1)',
            explanation: 'Full padding allows the filter kernel to just graze the outermost border pixels of the image with a single pixel overlap, maximizing boundary coverage.',
            formula: 'P_{full} = F - 1 = 5 - 1 = 4 \\text{ pixels}',
            substitution: 'W_{full} = \\frac{32 - 5 + 2(4)}{1} + 1 = \\frac{32 - 5 + 8}{1} + 1 = 35 + 1 = 36',
            result: 'Padding P = 4 pixels ==> Output = 36 x 36 feature map'
          },
          {
            stepNumber: 5,
            title: 'Case 4: Same Padding with Downsampling Stride S = 2',
            explanation: 'When stride S = 2 is used alongside Same Padding (P = 2), the spatial resolution is halved.',
            formula: 'W_{strided} = \\left\\lfloor \\frac{32 - 5 + 2(2)}{2} \\right\\rfloor + 1 = \\left\\lfloor \\frac{31}{2} \\right\\rfloor + 1 = 15 + 1 = 16',
            result: '16 x 16 feature map',
            tip: 'Strided convolutions (S = 2) with same padding act as trainable downsamplers, replacing traditional pooling layers.'
          }
        ],
        finalAnswer: {
          label: 'Spatial Dimensions Across Padding Schemes',
          value: 'Valid (P=0): 28x28  |  Same (P=2): 32x32  |  Full (P=4): 36x36',
          interpretation: 'For input 32x32 and filter 5x5: Valid padding shrinks the feature map to 28x28. Adding P = 2 zeros symmetrically (Same padding) preserves the exact 32x32 size, preventing feature shrinkage across deep CNN layers.'
        }
      },
      summary: [
        'Padding surrounds input borders with zeros before convolution to control output dimensions.',
        'Prevents progressive spatial shrinkage, enabling very deep neural network architectures.',
        'Prevents loss of border and edge features by sampling corners equally.',
        'Valid Padding (P=0) shrinks output; Same Padding (P=(F-1)/2) preserves input dimensions exactly.'
      ],
      keyPoints: [
        'Output size formula: floor((W - F + 2P)/S) + 1',
        'Prevention of spatial shrinkage and deep network feasibility',
        'Border feature loss prevention',
        'Valid Padding (P=0) vs Same Padding (P=(F-1)/2) vs Full Padding'
      ]
    },
    {
      id: 'ml-u6-q12',
      unitId: 'unit-6',
      subjectId: 'machine-learning',
      qNumber: 12,
      title: 'Explain Recommendation Systems: Differentiate Between Content-Based and Personalized (Collaborative Filtering) Recommendation',
      shortTitle: 'Recommendation Systems: Content-Based vs Collaborative',
      marks: 6,
      importance: 'Important',
      occurrenceCount: 2,
      papersAsked: [
        { paper: 'Paper 2', questionNo: 'Q8(b)', marks: 6 },
        { paper: 'Paper 3', questionNo: 'Q8(b)', marks: 6 }
      ],
      syllabusTopics: ['Recommendation Systems', 'Content-Based Filtering', 'Collaborative Filtering', 'Cosine Similarity', 'Cold-Start', 'Serendipity'],
      definition: 'A Recommendation System is an information filtering algorithm that models user preferences, history, and item attributes to predict ratings or suggest items that a user is likely to consume (e.g. movies on Netflix, songs on Spotify, products on Amazon).',
      sections: [
        {
          title: '1. Content-Based Recommendation',
          content: [
            'Principle: Recommends items similar to those the user has enjoyed in the past based on item metadata and descriptive attributes (e.g. genre, director, actors for movies).',
            'Mechanism: Creates a user profile vector from past likes and calculates vector similarity (such as Cosine Similarity) against candidate item attribute vectors:',
            '  Sim(u, i) = cos(u, v_i) = (u · v_i) / (||u|| * ||v_i||).',
            'Advantages: Independent of other users; zero cold-start problem for new items as long as metadata attributes are tagged.',
            'Limitations: Suffers from overspecialization (filter bubbles): the user is never recommended novel items outside their historical genre preference.'
          ]
        },
        {
          title: '2. Personalized Collaborative Recommendation (Collaborative Filtering)',
          content: [
            'Principle: Generates suggestions based on the collective behavior, ratings, and purchase histories of similar users across the community ("Users who liked this also liked...").',
            'Methodologies:',
            '  • User-Based: Identifies peers with matching rating patterns and suggests items they rated highly.',
            '  • Item-Based: Finds items that are frequently co-rated similarly by common users.',
            '  • Matrix Factorization / Deep Learning: Singular Value Decomposition (SVD) and neural collaborative filtering decompose the sparse user-item matrix into latent preference factors.',
            'Advantages: Delivers high serendipity (recommends novel, unexpected discoveries from different domains).',
            'Limitations: Suffers from the user cold-start problem: cannot make accurate recommendations for newly registered users who have not yet submitted ratings.'
          ]
        }
      ],
      tables: [
        {
          headers: ['Comparison Dimension', 'Content-Based Filtering', 'Personalized (Collaborative Filtering)'],
          rows: [
            { parameter: 'Basis of Suggestion', col1: 'Item metadata features, keywords, tags, and descriptive genre attributes', col2: 'Historical user rating overlaps, interaction logs, and community behavior' },
            { parameter: 'Community Dependency', col1: 'Completely independent of other users; models each user in isolation', col2: 'Strictly requires an active community of overlapping user ratings' },
            { parameter: 'New Item Cold-Start', col1: 'No problem: new items can be suggested immediately based on metadata', col2: 'Severe: new items cannot be recommended until other users rate them' },
            { parameter: 'New User Cold-Start', col1: 'Moderate: requires a few initial user attribute selections', col2: 'Severe: requires substantial user rating history to find peer neighbors' },
            { parameter: 'Diversity & Serendipity', col1: 'Low: prone to overspecialization and narrow filter bubbles', col2: 'High: discovers surprising, novel items across diverse categories' }
          ]
        }
      ],
      summary: [
        'Content-Based filtering suggests items matching item metadata and past user choices.',
        'Personalized Collaborative filtering suggests items based on overlapping rating patterns of similar users.',
        'Content-based avoids community dependency but causes overspecialization.',
        'Collaborative filtering offers high serendipity but suffers from user/item cold-start problems.'
      ],
      keyPoints: [
        'Content-based item metadata attribute matching',
        'Cosine similarity vector calculation',
        'Collaborative filtering community pattern analysis',
        'Cold-start problem vs serendipity trade-offs'
      ]
    }
  ]
};
