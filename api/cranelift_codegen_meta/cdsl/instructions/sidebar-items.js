initSidebarItems({"enum":[["BindParameter","An parameter used for binding instructions to specific types or values"],["FormatPredicateKind",""],["Immediate",""],["InstSpec","An instruction specification, containing an instruction that has bound types or not."],["InstructionPredicateNode","A basic node in an instruction predicate: either an atom, or an AND of two conditions."],["TypePredicateNode",""],["ValueTypeOrAny","A thin wrapper like Option, but with more precise semantics."]],"fn":[["is_ctrl_typevar_candidate","Verify that the use of TypeVars is consistent with `ctrl_typevar` as the controlling type variable."],["vector","Constructor for more easily building vector parameters from any lane type"],["verify_format","Checks that the input operands actually match the given format."],["verify_polymorphic","Check if this instruction is polymorphic, and verify its use of type variables."]],"struct":[["BoundInstruction",""],["FormatPredicateNode",""],["InstructionBuilder",""],["InstructionContent",""],["InstructionGroup","Every instruction must belong to exactly one instruction group. A given target architecture can support instructions from multiple groups, and it does not necessarily support all instructions in a group."],["InstructionGroupBuilder",""],["InstructionPredicate",""],["InstructionPredicateNumber",""],["InstructionPredicateRegistry","A registry of predicates to help deduplicating them, during Encodings construction. When the construction process is over, it needs to be extracted with `extract` and associated to the TargetIsa."],["OpcodeNumber",""],["PolymorphicInfo",""]],"trait":[["Bindable","Instructions can have parameters bound to them to specialize them for more specific encodings (e.g. the encoding for adding two float types may be different than that of adding two integer types)"]],"type":[["AllInstructions",""],["Instruction",""],["InstructionPredicateMap",""],["VectorBitWidth","The number of bits in the vector"]]});