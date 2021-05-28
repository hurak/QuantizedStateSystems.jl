var documenterSearchIndex = {"docs":
[{"location":"","page":"Home","title":"Home","text":"CurrentModule = QuantizedStateSystems","category":"page"},{"location":"#QuantizedStateSystems.jl","page":"Home","title":"QuantizedStateSystems.jl","text":"","category":"section"},{"location":"","page":"Home","title":"Home","text":"Documentation for QuantizedStateSystems.jl.","category":"page"},{"location":"","page":"Home","title":"Home","text":"","category":"page"},{"location":"","page":"Home","title":"Home","text":"Modules = [QuantizedStateSystems]","category":"page"},{"location":"#QuantizedStateSystems.qss1-NTuple{4, Any}","page":"Home","title":"QuantizedStateSystems.qss1","text":"t,x,q = qss1(f,x₀,tspan,Δq)\n\nSolve the initial value problem (IVP) for a given first-order ODE using the method of hysteretically quantized state system (QSS) or order 1.\n\nConsider a single first-order explicit ODEs (aka state equation) ẋ = f(x), with the initial value x₀ specified at an initial time t₀. Solution is to be found on a time span tspan=(t₀,t₁). The only parameter is the quantum Δq. The hysteresis band has the same width as the quantum.\n\nThe outputs are three arrays of arrays:\n\n1D array t of 1D arrays (vectors) of times,\n1D array x of the 1D arrays corresponding to the evolution of individual state variables,\n1D array q of the 1D arrays corresponding to the evolution of individual quantized state variables.\n\nNote that for a first-order system with no external events the x and q arrays are identical up to the initial values (x₀ before and after quantization), but we decided to keep track of both separately just in case we extend the functionality for handling external events (such as step inputs). \n\nReferences\n\nE. Kofman and S. Junco, \"Quantized-state systems: a DEVS Approach for continuous system simulation\", Trans. Soc. Comput. Simul. Int., vol. 18, no. 3, pp. 123–132, Sep. 2001.\nF. E. Cellier and E. Kofman, Continuous System Simulation, Springer, 2010.\nB. P. Zeigler, A. Muzy, and E. Kofman, Theory of Modeling and Simulation: Discrete Event and Iterative System Computational Foundations, 3rd ed. Academic Press, 2018.\n\nExample\n\njulia> f(x) = -1.0*x;\njulia> x₀ = 10.0;\njulia> tspan = (0.0,1.0);\njulia> Δq = 0.1;\njulia> tarray,xarray,qarray = qss1(f,x₀,tspan,Δq);\n\n\n\n\n\n","category":"method"}]
}
