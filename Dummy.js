/**
 * @file Dummy library Wrapper
 * <br>status: Internal testing
 * <br>This is a dummy library wrapper which permits to do dummy things that
 * are not available in the other dummy libraries from a NodeJs application.
 * <br>bad doclink : DOCLINK_NOT_FOUND
 * @version	alpha0.1.3
 * @copyright	1999-2017 OP3FT
 */




////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////					Selecting the Addon built with the expected Nodejs version									////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


var addon;
             
/* Links to the addon built with the used Node Module Version */
switch(Number(process.versions.modules)) {
	
	case 11: //for v0.10.4 to v0.10.48
        if (process.platform=='darwin')
            addon = require('./Addon/macosx/DummyWrapperAddon/DummyWrapper_v11/DummyWrapper');
		else if (process.platform=='win32')
            addon = require('./Addon/win32/DummyWrapperAddon/DummyWrapper_v11/DummyWrapper');
		else if (process.platform=='linux')
            addon = require('./Addon/linux/DummyWrapperAddon/DummyWrapper_v11/DummyWrapper');
		else 
			console.log("This operating system is not supported by the Upil Wrapper add-on");
		break;
	
	case 14: //for v0.11.11 to v0.12.18
        if (process.platform=='darwin')
            addon = require('./Addon/macosx/DummyWrapperAddon/DummyWrapper_v14/DummyWrapper');
		else if (process.platform=='win32')
            addon = require('./Addon/win32/DummyWrapperAddon/DummyWrapper_v14/DummyWrapper');
		else if (process.platform=='linux')
            addon = require('./Addon/linux/DummyWrapperAddon/DummyWrapper_v14/DummyWrapper');
		else 
			console.log("This operating system is not supported by the Upil Wrapper add-on");
		
		if (process.versions.node == '0.11.11' || 
			process.versions.node == '0.11.12' ||
			process.versions.node == '0.11.13' || 
			process.versions.node == '0.11.14' )
			console.log("The Addon may crash with this node version, known issue");
		break;
	
	case 42: //for v1.0.0 to v1.0.4
        if (process.platform=='darwin')
            addon = require('./Addon/macosx/DummyWrapperAddon/DummyWrapper_v42/DummyWrapper');
		else if (process.platform=='win32')
            addon = require('./Addon/win32/DummyWrapperAddon/DummyWrapper_v42/DummyWrapper');
		else if (process.platform=='linux')
            addon = require('./Addon/linux/DummyWrapperAddon/DummyWrapper_v42/DummyWrapper');
		else 
			console.log("This operating system is not supported by the Upil Wrapper add-on");
		break;
	
	case 43: //for v1.1.0 to v1.8.4
        if (process.platform=='darwin')
            addon = require('./Addon/macosx/DummyWrapperAddon/DummyWrapper_v43/DummyWrapper');
		else if (process.platform=='win32')
            addon = require('./Addon/win32/DummyWrapperAddon/DummyWrapper_v43/DummyWrapper');
		else if (process.platform=='linux')
            addon = require('./Addon/linux/DummyWrapperAddon/DummyWrapper_v43/DummyWrapper');
		else 
			console.log("This operating system is not supported by the Upil Wrapper add-on");
        break;
   
	case 44: //for v2.0.0 to v2.5.0
        if (process.platform=='darwin')
            addon = require('./Addon/macosx/DummyWrapperAddon/DummyWrapper_v44/DummyWrapper');
		else if (process.platform=='win32')
            addon = require('./Addon/win32/DummyWrapperAddon/DummyWrapper_v44/DummyWrapper');
		else if (process.platform=='linux')
            addon = require('./Addon/linux/DummyWrapperAddon/DummyWrapper_v44/DummyWrapper');
		else 
			console.log("This operating system is not supported by the Upil Wrapper add-on");
        break;
	
	case 45: //for v3.0.0 to v3.3.1
		if (process.platform=='darwin')
            addon = require('./Addon/macosx/DummyWrapperAddon/DummyWrapper_v45/DummyWrapper');
		else if (process.platform=='win32')
            addon = require('./Addon/win32/DummyWrapperAddon/DummyWrapper_v45/DummyWrapper');
		else if (process.platform=='linux')
            addon = require('./Addon/linux/DummyWrapperAddon/DummyWrapper_v45/DummyWrapper');
		else 
			console.log("This operating system is not supported by the Upil Wrapper add-on");
        break;
	
	case 46: //for v4.0.0 to v4.7.2
        if (process.platform=='darwin')
            addon = require('./Addon/macosx/DummyWrapperAddon/DummyWrapper_v46/DummyWrapper');
		else if (process.platform=='win32')
            addon = require('./Addon/win32/DummyWrapperAddon/DummyWrapper_v46/DummyWrapper');
		else if (process.platform=='linux')
            addon = require('./Addon/linux/DummyWrapperAddon/DummyWrapper_v46/DummyWrapper');
		else 
			console.log("This operating system is not supported by the Upil Wrapper add-on");
        break;
	
	case 47: //for v5.0.0 to v5.12.0
        if (process.platform=='darwin')
            addon = require('./Addon/macosx/DummyWrapperAddon/DummyWrapper_v47/DummyWrapper');
		else if (process.platform=='win32')
            addon = require('./Addon/win32/DummyWrapperAddon/DummyWrapper_v47/DummyWrapper');
		else if (process.platform=='linux')
            addon = require('./Addon/linux/DummyWrapperAddon/DummyWrapper_v47/DummyWrapper');
		else 
			console.log("This operating system is not supported by the Upil Wrapper add-on");
        break;
	
	case 48: //for v6.0.0 to v6.9.4
		if (process.platform=='darwin')
            addon = require('./Addon/macosx/DummyWrapperAddon/DummyWrapper_v48/DummyWrapper');
		else if (process.platform=='win32')
            addon = require('./Addon/win32/DummyWrapperAddon/DummyWrapper_v48/DummyWrapper');
		else if (process.platform=='linux')
            addon = require('./Addon/linux/DummyWrapperAddon/DummyWrapper_v48/DummyWrapper');
		else 
			console.log("This operating system is not supported by the Upil Wrapper add-on");
        break;
	
	case 51: //for v7.0.0 to ...
        if (process.platform=='darwin')
            addon = require('./Addon/macosx/DummyWrapperAddon/DummyWrapper_v51/DummyWrapper');
		else if (process.platform=='win32')
            addon = require('./Addon/win32/DummyWrapperAddon/DummyWrapper_v51/DummyWrapper');
		else if (process.platform=='linux')
            addon = require('./Addon/linux/DummyWrapperAddon/DummyWrapper_v51/DummyWrapper');
		else 
			console.log("This operating system is not supported by the Upil Wrapper add-on");
        break;
	
	case 52: 
		console.log("This version is not yet supported by the LibDummy Wrapper, try with a previous one");
        break;		
    
	default:
		switch(Number(process.version.match(/^v(\d+\.\d+)/)[1])) {
			
			case 0.8: 
				if (process.platform=='darwin')
                    addon = require('./Addon/macosx/DummyWrapperAddon/DummyWrapper_v1/DummyWrapper');
				else if (process.platform=='win32')
					addon = require('./Addon/win32/DummyWrapperAddon/DummyWrapper_v1/DummyWrapper');
				else if (process.platform=='linux')
					addon = require('./Addon/linux/DummyWrapperAddon/DummyWrapper_v1/DummyWrapper');
				else 
					console.log("This operating system is not supported by the Upil Wrapper add-on");
				
				if (process.versions.node == '0.8.0'  || 
					process.versions.node == '0.8.1' || 
					process.versions.node == '0.8.2' )
					console.log("The Addon may crash with this node version, known issue");
				break;
			
			case 0.9: 
				if (process.versions.node == '0.9.0')
                {
					if (process.platform=='darwin')
                        addon = require('./Addon/macosx/DummyWrapperAddon/DummyWrapper_v1/DummyWrapper');
					else if (process.platform=='win32')
						addon = require('./Addon/win32/DummyWrapperAddon/DummyWrapper_v1/DummyWrapper');
					else if (process.platform=='linux')
						addon = require('./Addon/linux/DummyWrapperAddon/DummyWrapper_v11/DummyWrapper');
					else 
						console.log("This operating system is not supported by the Upil Wrapper add-on");
                }
				else if ( 	process.versions.node == '0.9.9'  ||
							process.versions.node == '0.9.10' || 
							process.versions.node == '0.9.11' || 
							process.versions.node == '0.9.12' )
				{
                    if (process.platform=='darwin')
                        addon = require('./Addon/macosx/DummyWrapperAddon/DummyWrapper_v11/DummyWrapper');
					else if (process.platform=='win32')
						addon = require('./Addon/win32/DummyWrapperAddon/DummyWrapper_v11/DummyWrapper');
					else if (process.platform=='linux')
						addon = require('./Addon/linux/DummyWrapperAddon/DummyWrapper_v11/DummyWrapper');
					else 
						console.log("This operating system is not supported by the Upil Wrapper add-on");
		
					console.log("The Addon may crash with this node version, known issue");
				}
				else
					//for v0.9.1 to v0.9.8
					if (process.platform=='darwin')
                        addon = require('./Addon/macosx/DummyWrapperAddon/DummyWrapper_v10/DummyWrapper');
					else if (process.platform=='win32')
						addon = require('./Addon/win32/DummyWrapperAddon/DummyWrapper_v10/DummyWrapper');
					else if (process.platform=='linux')
						addon = require('./Addon/linux/DummyWrapperAddon/DummyWrapper_v11/DummyWrapper');
					else 
						console.log("This operating system is not supported by the Upil Wrapper add-on");
				break;		
			
			case 0.10:
				//for v0.10.0 to v0.10.3
                if (process.platform=='darwin')
                    addon = require('./Addon/macosx/DummyWrapperAddon/DummyWrapper_v11/DummyWrapper');
				else if (process.platform=='win32')
					addon = require('./Addon/win32/DummyWrapperAddon/DummyWrapper_v11/DummyWrapper');
				else if (process.platform=='linux')
					addon = require('./Addon/linux/DummyWrapperAddon/DummyWrapper_v11/DummyWrapper');
				else 
					console.log("This operating system is not supported by the Upil Wrapper add-on");
				
				if (process.versions.node == '0.10.0')
					console.log("The Addon may crash with this node version, known issue");
				break;
			
			default:
				console.log("This Nodejs version is not supported by the Upil Wrapper add-on");
				return;
		}
} 



////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////
////					LibDummy Wrapping Functions, Types, Constants and Enumerations Definition					////
////////////////////////////////////////////////////////////////////////////////////////////////////////////////////////


/*
 * Library section
 * This section covers library initialization and finalization.
 *
 */

/* Beginning of section: Library section */

/**
 * Library Version
 * @name LIBRARY_VERSION
 * @ćonstant 
 * @default alpha0.1.3
 */
exports.LIBRARY_VERSION = "alpha0.1.3";

/*
 * Library States
 * Library states returned by the DummyLibraryGetState() function
 */

/**
 * Undefined
 * <br> Undefined
 * @name LIBRARY_STATE_UNDEFINED
 * @ćonstant 
 * @default 1010000
 */
exports.LIBRARY_STATE_UNDEFINED = 1010000;

/**
 * Not initialized
 * <br> Library is not initialized.
 * @name LIBRARY_STATE_NOT_INITIALIZED
 * @ćonstant 
 * @default 1010001
 */
exports.LIBRARY_STATE_NOT_INITIALIZED = 1010001;

/**
 * initialization has failed
 * <br> The initialization of the library failed.
 * @name LIBRARY_STATE_INITIALIZATION_HAS_FAILED
 * @ćonstant 
 * @default 1010002
 */
exports.LIBRARY_STATE_INITIALIZATION_HAS_FAILED = 1010002;

/**
 * Initialized
 * <br> Library is initialized.
 * @name LIBRARY_STATE_INITIALIZED
 * @ćonstant 
 * @default 1010003
 */
exports.LIBRARY_STATE_INITIALIZED = 1010003;

/**
 * Finalization has failed
 * <br> The finalization of the library failed.
 * @name LIBRARY_STATE_FINALIZATION_HAS_FAILED
 * @ćonstant 
 * @default 1010004
 */
exports.LIBRARY_STATE_FINALIZATION_HAS_FAILED = 1010004;

/**
 * Finalized
 * <br> Library is finalized.
 * @name LIBRARY_STATE_FINALIZED
 * @ćonstant 
 * @default 1010005
 */
exports.LIBRARY_STATE_FINALIZED = 1010005;


/*
 * Library initialization errors
 * Library initialization errors returned by the DummyLibraryGetState() function.
 */

/**
 * Undefined
 * <br> Undefined
 * @name LIBRARY_INITIALIZATION_ERROR_UNDEFINED
 * @ćonstant 
 * @default 1020000
 */
exports.LIBRARY_INITIALIZATION_ERROR_UNDEFINED = 1020000;

/**
 *Invalid state
 * <br> Invalid state
 * @name LIBRARY_INITIALIZATION_ERROR_INVALID_STATE
 * @ćonstant 
 * @default 1020001
 */
exports.LIBRARY_INITIALIZATION_ERROR_INVALID_STATE = 1020001;

/**
 * NULL parameter
 * <br> NULL parameter
 * @name LIBRARY_INITIALIZATION_ERROR_NULL_PARAMETER
 * @ćonstant 
 * @default 1020002
 */
exports.LIBRARY_INITIALIZATION_ERROR_NULL_PARAMETER = 1020002;

/**
 * Invalid library version length
 * <br> Invalid library version length
 * @name LIBRARY_INITIALIZATION_ERROR_INVALID_LIBRARY_VERSION_LENGTH
 * @ćonstant 
 * @default 1020003
 */
exports.LIBRARY_INITIALIZATION_ERROR_INVALID_LIBRARY_VERSION_LENGTH = 1020003;

/**
 * FCT fleet is already cruising
 * <br> FCT fleet is already cruising
 * @name LIBRARY_INITIALIZATION_ERROR_FCT_FLEET_IS_ALREADY_CRUISING
 * @ćonstant 
 * @default 1020004
 */
exports.LIBRARY_INITIALIZATION_ERROR_FCT_FLEET_IS_ALREADY_CRUISING = 1020004;

/**
 * FCT takeoff has failed
 * <br> FCT takeoff has failed
 * @name LIBRARY_INITIALIZATION_ERROR_FCT_TAKEOFF_HAS_FAILED
 * @ćonstant 
 * @default 1020005
 */
exports.LIBRARY_INITIALIZATION_ERROR_FCT_TAKEOFF_HAS_FAILED = 1020005;

/**
 * Mempool create failed
 * <br> Mempool create failed
 * @name LIBRARY_INITIALIZATION_ERROR_MEMPOOL_CREATE_FAILED
 * @ćonstant 
 * @default 1020006
 */
exports.LIBRARY_INITIALIZATION_ERROR_MEMPOOL_CREATE_FAILED = 1020006;

/**
 * No error
 * <br> No library initialization error.
 * @name LIBRARY_INITIALIZATION_ERROR_NO_ERROR
 * @ćonstant 
 * @default 1020007
 */
exports.LIBRARY_INITIALIZATION_ERROR_NO_ERROR = 1020007;

/**
 * Invalid library version
 * <br> Version of the library is invalid
 * @name LIBRARY_INITIALIZATION_ERROR_INVALID_LIBRARY_VERSION
 * @ćonstant 
 * @default 1020002
 */
exports.LIBRARY_INITIALIZATION_ERROR_INVALID_LIBRARY_VERSION = 1020002;

/**
 * Internal range begin
 * <br> Start of the internal range of library-initialization errors
 * @name LIBRARY_INITIALIZATION_ERROR_INTERNAL_RANGE_BEGIN
 * @ćonstant 
 * @default 1021000
 */
exports.LIBRARY_INITIALIZATION_ERROR_INTERNAL_RANGE_BEGIN = 1021000;


/*
 * Library finalization errors
 * Library finalization errors returned by the DummyLibraryGetState() function.
 */

/**
 * Undefined
 * <br> Undefined
 * @name LIBRARY_FINALIZATION_ERROR_UNDEFINED
 * @ćonstant 
 * @default 1020000
 */
exports.LIBRARY_FINALIZATION_ERROR_UNDEFINED = 1020000;

/**
 * Invalid state
 * <br> Invalid state
 * @name LIBRARY_FINALIZATION_ERROR_INVALID_STATE
 * @ćonstant 
 * @default 1020001
 */
exports.LIBRARY_FINALIZATION_ERROR_INVALID_STATE = 1020001;

/**
 * FCT fleet is not cruising
 * <br> FCT fleet is not cruising
 * @name LIBRARY_FINALIZATION_ERROR_FCT_FLEET_IS_NOT_CRUISING
 * @ćonstant 
 * @default 1020002
 */
exports.LIBRARY_FINALIZATION_ERROR_FCT_FLEET_IS_NOT_CRUISING = 1020002;

/**
 * No error
 * <br> No library finalization error.
 * @name LIBRARY_FINALIZATION_ERROR_NO_ERROR
 * @ćonstant 
 * @default 1020003
 */
exports.LIBRARY_FINALIZATION_ERROR_NO_ERROR = 1020003;

/**
 * Internal range begin
 * <br> Start of the internal range of library-finalization errors.
 * @name LIBRARY_FINALIZATION_ERROR_INTERNAL_RANGE_BEGIN
 * @ćonstant 
 * @default 1021000
 */
exports.LIBRARY_FINALIZATION_ERROR_INTERNAL_RANGE_BEGIN = 1021000;



/**
 * Initializes the dummy library.
 * @param {UpilBuffer} in_version - Version of the library.
 * @param {DummyLibraryInitializeCallback} cb - The callback that handles the response.
 */
exports.DummyLibraryInitialize = function(in_version, cb)
{
	addon.DummyLibraryInitialize(in_version, cb);
};

/**
 * This callback is used as the DummyLibraryInitialize function callback
 * @callback DummyLibraryInitializeCallback
 * @param {Boolean} bool - true if the function succeeds, false if the function fails.
 */


/**
 * Finalizes the dummy library.
 * @param {DummyLibraryFinalizeCallback} cb - The callback that handles the response.
 */
exports.DummyLibraryFinalize = function(cb)
{
	addon.DummyLibraryFinalize(cb);
};

/**
 * This callback is used as the DummyLibraryFinalize function callback
 * @callback DummyLibraryFinalizeCallback
 * @param {Boolean} bool - true if the function succeeds, false if the function fails.
 */


/**
 * Gets the library state.
 * @param {DummyLibraryGetStateCallback} cb - The callback that handles the response.
 */
exports.DummyLibraryGetState = function(cb)
{
	addon.DummyLibraryGetState(cb);
};

/**
 * This callback is used as the DummyLibraryGetState function callback
 * @callback DummyLibraryGetStateCallback
 * @param {Boolean} bool - true if the function succeeds, false if the function fails.
 * @param {Number(Int32)} out_library_state  - Library state
 * <br>State of the library. See {@ĺink DUMMY_LIBRARY_STATE_.... }
 * @param {Number(Int32)} out_initialization_error - Initialization error
 * <br>Library initialization error.
 * @param {Number(Int32)} out_finalization_error - Finalization error
 * <br>Library finalization error.
 */


/* End of section: Library section */


/*
 * First section
 * This is a multiline comment.
 * This should be on the second line
 * See this enumeration: AN_ENUMERATION_...
 */ 

/* Beginning of section: First section */

/* Beginning of subsection: First subsection */


/**
 * The answer to THE question
 * <br> You should read THE book to understand.
 * <br> See this value: {@link AN_ENUMERATION_ZERO}
 * @name A_CONSTANT
 * @ćonstant 
 * @default 42
 */
exports.A_CONSTANT = 42;

/**
 * Max item count in the collection
 * <br> Same as the total number of fingers we have:
 * <br> - Left hand
 * <br> - Right hand
 * <br> See this constant: {@link A_CONSTANT}
 * @name COLLECTION_COUNT_MAX
 * @ćonstant 
 * @default 10
 */
exports.COLLECTION_COUNT_MAX = 10;



/*
 * Details on an-enumeration
 * This is a short comment. doclink : A_DUPLICATED_ENUMERATION_...
 */

/**
 * Zero
 * <br> This is less than one.
 * <br> Same as nothing...
 * <br> doclink : {@link DummyLibraryInitialize()}
 * @name AN_ENUMERATION_ZERO
 * @ćonstant 
 * @default 10
 */
exports.AN_ENUMERATION_ZERO = 10;

/**
 * One
 * <br> Is this a prime?
 * <br> I'll never know...
 * @name AN_ENUMERATION_ONE
 * @ćonstant 
 * @default 11
 */
exports.AN_ENUMERATION_ONE = 11;

/**
 * One plus one
 * <br> Can you count?
 * <br> I can!
 * @name AN_ENUMERATION_TWO
 * @ćonstant 
 * @default 12
 */
exports.AN_ENUMERATION_TWO = 12;

/**
 * Three
 * <br> Same as the number
 * <br> of lines in
 * <br> this comment
 * @name AN_ENUMERATION_THREE
 * @ćonstant 
 * @default 13
 */
exports.AN_ENUMERATION_THREE = 13;


/*
 * A duplicated enumeration
 * You should not repeat yourself... See this keyword: null
 */

/**
 * Zero
 * <br> This is less than one.
 * <br> Same as nothing...
 * <br> doclink : {@link DummyLibraryInitialize()}
 * @name A_DUPLICATED_ENUMERATION_ZERO
 * @ćonstant 
 * @default 10
 */
exports.A_DUPLICATED_ENUMERATION_ZERO = 10;

/**
 * One
 * <br> Is this a prime?
 * <br> I'll never know...
 * @name A_DUPLICATED_ENUMERATION_ONE
 * @ćonstant 
 * @default 11
 */
exports.A_DUPLICATED_ENUMERATION_ONE = 11;


/**
 * One plus one
 * <br> Can you count?
 * <br> I can!
 * @name A_DUPLICATED_ENUMERATION_TWO
 * @ćonstant 
 * @default 12
 */
exports.A_DUPLICATED_ENUMERATION_TWO = 12;

/**
 * Three
 * <br> Same as the number
 * <br> of lines in
 * <br> this comment
 * @name A_DUPLICATED_ENUMERATION_THREE
 * @ćonstant 
 * @default 13
 */
exports.A_DUPLICATED_ENUMERATION_THREE = 13;



/**
 * Upil Buffer
 * The Upil Buffer is an array of unsigned char 
 * <br> We only deal with positive 8 bits values (between 0 and 255)
 * <br>The Uint8Array and Buffer classes can also be used when NODE_MODULE_VERSION >= 14
 * @typedef {Array.<Number(Int8)> | Uint8Array | Buffer} UpilBuffer
 */


/**
 * 
 * Record of Primitives
 * This is the simplest record I could think of
 * <br>Also see this one: {@link Image}
 * @typedef {Object} RecordOfPrimitives
 * @property {Boolean} the_boolean - The boolean
 * <br>See also the red property of {@link Image}
 * @property {Number(Int32)} the_integer32 - The 32 bits integer
 * <br>We only deal with 32 bits values
 * <br>We don't need more
 * <br>See also: {@link AN_ENUMERATION_THREE}
 * @property {UpilBuffer} the_buffer - For storing arbitrary binary data
 */


/**
 * A bitmap image
 * <br>Each plane is stored in its own buffer.
 * <br>See also the "the_buffer" property of {@link RecordOfPrimitives}
 * @typedef {Object} Image
 * @property {UpilBuffer} red - The red plane 
 * <br> Beware of the bull
 * @property {UpilBuffer} green - The green plane
 * <br>The color of a frog...
 * <br> ...ans?
 * @property {UpilBuffer} blue - The blue plane
 * <br>The color of the sky
 * <br>in good weather conditions
 * @property {UpilBuffer} alpha - The alpha plane 
 * <br>Visible or invisible
 * <br>or anything in the middle
 * @property {RecordOfPrimitives} strange - The strange one
 * <br>A rather strange field in an image record...
 */


/**
 * A collection of 32 bits integers
 * <br>So many of them...
 * <br>See also: the "green" property of {@link Image}
 * @typedef {Array.<Number(Int32)>} CollectionOfInteger32 
 */


/**
 * A  collection of record of primitives
 * @typedef {Array.<RecordOfPrimitives>} CollectionOfRecordOfPrimitives 
 */


/**
 * Record of non-primitive types
 * <br>Not trivial
 * @typedef {Object} RecordOfNonPrimitives 
 * @property {CollectionOfInteger32} the_col - The collection of 32 bits integers
 * <br>This is too short comment
 * @property {Image} the_record - The record
 * <br>This is too short comment
 */



/**
 * Copy a boolean
 * <br>This is a multiline comment 
 * <br>This should be on the second line
 * <br>This should be on the third
 * @param {Boolean} orig - The input boolean
 * <br>This is a short comment. doclink : {@link copy_boolean()}
 * @param {DummyCopyBooleanCallback} cb - The callback that handles the response
 */
exports.DummyCopyBoolean = function(orig, cb)
{
	addon.DummyCopyBoolean(orig, cb); 
};

/**
 * This callback is used as the DummyCopyBoolean function callback
 * @callback DummyCopyBooleanCallback
 * @param {Boolean} bool - true if success, false otherwise
 * @param {Boolean} copy - [out] The output boolean  
 * <br>This is a multiline comment.
 * <br>This should be on the second line
 * <br>This should be on the third
 */


/**
 * Copy a 32 bits integer
 * <br>This is a multiline comment 
 * <br>This should be on the second line
 * <br>This should be on the third
 * @param {Number(Int32)} orig - The input integer
 * @param {DummyCopyInteger32Callback} cb - The callback that handles the response
 */
exports.DummyCopyInteger32 = function(orig, cb)
{
	addon.DummyCopyInteger32(orig, cb);
};

/**
 * This callback is used as the DummyCopyInteger32 function callback
 * @callback DummyCopyInteger32Callback
 * @param {Boolean} bool - true if success, false otherwise
 * @param {Number(Int32)} copy - [out] The output integer  
 * <br>This is a multiline comment.
 * <br>This should be on the second line
 * <br>This should be on the third
 */


/**
 * Deeply copies a buffer
 * <br>This is a multiline comment. 
 * <br>This should be on the second line.
 * <br>This should be on the third.
 * @param {UpilBuffer} orig - The input buffer
 * @param {DummyDeepCopyBufferCallback} cb - The callback that handles the response.
 */
exports.DummyDeepCopyBuffer = function(orig, cb)
{
	addon.DummyDeepCopyBuffer(orig, cb);
};

/**
 * This callback is used as the DummyDeepCopyBuffer function callback
 * @callback DummyDeepCopyBufferCallback
 * @param {Boolean} bool - true if success, false otherwise
 * @param {UpilBuffer} copy - [out] The output buffer  
 * <br>This is a multiline comment.
 * <br>This should be on the second line
 * <br>This should be on the third.
 */


/**
 * Deeply copies a record of primitives
 * <br>This is a multiline comment. 
 * <br>This should be on the second line.
 * <br>This should be on the third.
 * @param {RecordOfPrimitives} orig - The input record of primitives
 * @param {DummyDeepcopyRecordOfPrimitivesCallback} cb - The callback that handles the response.
 */
exports.DummyDeepcopyRecordOfPrimitives = function(orig, cb)
{
	addon.DummyDeepcopyRecordOfPrimitives(orig, cb);
};

/**
 * This callback is used as the DummyDeepcopyRecordOfPrimitives function callback
 * @callback DummyDeepcopyRecordOfPrimitivesCallback
 * @param {Boolean} bool - true if success, false otherwise
 * @param {RecordOfPrimitives} copy - [out] The output record of primitives  
 * <br>This is a multiline comment.
 * <br>This should be on the second line
 * <br>This should be on the third.
 */


/**
 * Deeply copies a collection of 32 bits integers
 * <br>This is a multiline comment. 
 * <br>This should be on the second line.
 * <br>This should be on the third.
 * @param {CollectionOfInteger32} orig - The input collection of integers - This is a short comment
 * @param {DummyDeepcopyCollectionOfInteger32Callback} cb - The callback that handles the response.
 */
exports.DummyDeepcopyCollectionOfInteger32 = function(orig, cb)
{
	addon.DummyDeepcopyCollectionOfInteger32(orig, cb);
};

/**
 * This callback is used as the DummyDeepcopyCollectionOfInteger32 function callback
 * @callback DummyDeepcopyCollectionOfInteger32Callback
 * @param {Boolean} bool - true if success, false otherwise
 * @param {CollectionOfInteger32} copy - [out] The output collection of integers  
 * <br>This is a multiline comment.
 * <br>This should be on the second line
 * <br>This should be on the third.
 */


/**
 * Deeply copies a collection of record of primitives
 * <br>This is a multiline comment. 
 * <br>This should be on the second line.
 * <br>This should be on the third.
 * @param {CollectionOfRecordOfPrimitives} orig - The input collection of record of primitives
 * @param {DummyDeepcopyCollectionOfRecordOfPrimitivesCallback} cb - The callback that handles the response.
 */
exports.DummyDeepcopyCollectionOfRecordOfPrimitives = function(orig, cb)
{
	addon.DummyDeepcopyCollectionOfRecordOfPrimitives(orig, cb);
};

/**
 * This callback is used as the DummyDeepcopyCollectionOfRecordOfPrimitives function callback
 * @callback DummyDeepcopyCollectionOfRecordOfPrimitivesCallback
 * @param {Boolean} bool - true if success, false otherwise
 * @param {CollectionOfRecordOfPrimitives} copy - [out] The output collection of record of primitives  
 * <br>This is a multiline comment.
 * <br>This should be on the second line
 * <br>This should be on the third.
 */


/**
 * Get a 320x480 image 
 * <br>This is a multiline comment. 
 * <br>This should be on the second line.
 * <br>This should be on the third.
 * @param {DummyGetImage320x480Callback} cb - The callback that handles the response.
 */
exports.DummyGetImage320x480 = function(cb)
{
	addon.DummyGetImage320x480(cb);
};

/**
 * This callback is used as the DummyGetImage320x480 function callback
 * @callback DummyGetImage320x480Callback
 * @param {Boolean} bool - true if success, false otherwise
 * @param {Image} image - [out] The output image 
 * <br>This is a multiline comment.
 * <br>This should be on the second line
 * <br>This should be on the third.
 */

/* End of subsection: First subsection */

/* End of section: First section */

exports.DummyLibraryInitializeInt = function(bool, cb) 
{
	addon.DummyLibraryInitialize(bool, cb);
}	

/* End of subsection: First subsection */

/* Beginning of subsection: Second subsection */

/**
 * Maximum heap size
 * <br> The heap size should not go above this limit
 * @name MAX_HEAP_SIZE
 * @ćonstant 
 * @default 65536
 */
exports.MAX_HEAP_SIZE = 65536;


/* End of subsection: Second subsection */

/* End of section: First section */
