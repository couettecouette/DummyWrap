/**
 * Dummy library API
 *
 * @version		alpha0.1.3
 * @status		Internal testing
 *
 * @copyright	1999-2017 OP3FT
 *
 * This is a dummy library which permits to do dummy things that
 * are not available in the other dummy libraries.
 *	   bad doclink : DOCLINK_NOT_FOUND
 *
 * @file
 */

#ifndef _dummy_h
#define _dummy_h

#include "upil-types.h"

#ifdef __cplusplus
extern "C" {
#endif

#define DUMMY_LIBRARY_VERSION "alpha0.1.3"

/**
 * Library section
 * This section covers library initialization and finalization.
 *
 * @name Library section
 * @{
 */

/* Beginning of section: Library section */

/**
 * Initialize library
 *
 * Initializes the dummy library.
 *
 * @param		in_version	Version; Version of the library.
 * @return Returns UPIL_TRUE if the function succeeds, UPIL_FALSE if the
 * function fails.
 */
UPIL_LIBAPI upil_boolean UPIL_CALL dummy_library_initialize (upil_buffer in_version);

/**
 * Finalize library
 *
 * Finalizes the dummy library.
 *
 * @return Returns UPIL_TRUE if the function succeeds, UPIL_FALSE if the
 * function fails.
 */
UPIL_LIBAPI upil_boolean UPIL_CALL dummy_library_finalize (void);

/**
 * @name Library States
 * Library states returned by the dummy_library_get_state() function.
 * @anchor DUMMY_LIBRARY_STATE_
 */

/**
 * Undefined
 * Undefined.
 */
#define DUMMY_LIBRARY_STATE_UNDEFINED					1010000

/**
 * Not initialized
 * Library is not initialized.
 */
#define DUMMY_LIBRARY_STATE_NOT_INITIALIZED				1010001

/**
 * initialization has failed
 * The initialization of the library failed.
 */
#define DUMMY_LIBRARY_STATE_INITIALIZATION_HAS_FAILED	1010002

/**
 * Initialized
 * Library is initialized.
 */
#define DUMMY_LIBRARY_STATE_INITIALIZED					1010003

/**
 * Finalization has failed
 * The finalization of the library failed.
 */
#define DUMMY_LIBRARY_STATE_FINALIZATION_HAS_FAILED		1010004

/**
 * Finalized
 * Library is finalized.
 */
#define DUMMY_LIBRARY_STATE_FINALIZED					1010005


/**
 * @name Library initialization errors
 * Library initialization errors returned by the dummy_library_get_state() function.
 * @anchor DUMMY_LIBRARY_INITIALIZATION_ERROR_
 */

/**
 * Undefined
 * Undefined.
 */
#define DUMMY_LIBRARY_INITIALIZATION_ERROR_UNDEFINED						1020000

/**
 * Invalid state
 * Invalid state.
 */
#define DUMMY_LIBRARY_INITIALIZATION_ERROR_INVALID_STATE					1020001

/**
 * NULL parameter
 * NULL parameter.
 */
#define DUMMY_LIBRARY_INITIALIZATION_ERROR_NULL_PARAMETER					1020002

/**
 * Invalid library version length
 * Invalid library version length.
 */
#define DUMMY_LIBRARY_INITIALIZATION_ERROR_INVALID_LIBRARY_VERSION_LENGTH	1020003

/**
 * FCT fleet is already cruising
 * FCT fleet is already cruising.
 */
#define DUMMY_LIBRARY_INITIALIZATION_ERROR_FCT_FLEET_IS_ALREADY_CRUISING	1020004

/**
 * FCT takeoff has failed
 * FCT takeoff has failed.
 */
#define DUMMY_LIBRARY_INITIALIZATION_ERROR_FCT_TAKEOFF_HAS_FAILED			1020005

/**
 * Mempool create failed
 * Mempool create failed.
 */
#define DUMMY_LIBRARY_INITIALIZATION_ERROR_MEMPOOL_CREATE_FAILED			1020006

/**
 * No error
 * No library initialization error.
 */
#define DUMMY_LIBRARY_INITIALIZATION_ERROR_NO_ERROR							1020007

/**
 * Invalid library version
 * Version of the library is invalid.
 */
#define DUMMY_LIBRARY_INITIALIZATION_ERROR_INVALID_LIBRARY_VERSION			1020002

/**
 * Internal range begin
 * Start of the internal range of library-initialization errors.
 */
#define DUMMY_LIBRARY_INITIALIZATION_ERROR_INTERNAL_RANGE_BEGIN				1021000


/**
 * @name Library finalization errors
 * Library finalization errors returned by the dummy_library_get_state() function.
 * @anchor DUMMY_LIBRARY_FINALIZATION_ERROR_
 */

/**
 * Undefined
 * Undefined.
 */
#define DUMMY_LIBRARY_FINALIZATION_ERROR_UNDEFINED					1020000

/**
 * Invalid state
 * Invalid state.
 */
#define DUMMY_LIBRARY_FINALIZATION_ERROR_INVALID_STATE				1020001

/**
 * FCT fleet is not cruising
 * FCT fleet is not cruising.
 */
#define DUMMY_LIBRARY_FINALIZATION_ERROR_FCT_FLEET_IS_NOT_CRUISING	1020002

/**
 * No error
 * No library finalization error.
 */
#define DUMMY_LIBRARY_FINALIZATION_ERROR_NO_ERROR					1020003

/**
 * Internal range begin
 * Start of the internal range of library-finalization errors.
 */
#define DUMMY_LIBRARY_FINALIZATION_ERROR_INTERNAL_RANGE_BEGIN		1021000


/**
 * Get library state
 *
 * Gets the library state.
 *
 * @param [out]	out_library_state			Library state; State of the library. See @ref DUMMY_LIBRARY_STATE_....
 * @param [out]	out_initialization_error	Initialization error; Library initialization error.
 * @param [out]	out_finalization_error		Finalization error; Library finalization error.
 * @return Returns UPIL_TRUE if the function succeeds, UPIL_FALSE if the
 * function fails.
 */
UPIL_LIBAPI upil_boolean UPIL_CALL dummy_library_get_state (upil_integer32 *out_library_state,
															upil_integer32 *out_initialization_error,
															upil_integer32 *out_finalization_error);

/**
 * Library free arguments
 *
 * This function frees any memory allocated by the library for providing output arguments to the user
 * This function has to be called by the user once (the sooner the better) he has used the data of the output arguments
 * Whenever a function has an "out-arguments-free-id" argument, this function must be called, otherwise a memory leak occurs
 *
 * @param		in_free_id	Free ID; ID of the memory to be freed
 * @return Returns UPIL_TRUE if the function succeeds, UPIL_FALSE if the
 * function fails.
 */
UPIL_LIBAPI upil_boolean UPIL_CALL dummy_library_free_arguments (upil_integer32 in_free_id);

/**
 * Library get unfreed arguments
 *
 * This function reports unfreed arguments
 *
 * @param [out]	out_unfreed_size		Unfreed size; Size of the memory that was not unfreed
 * @param [out]	out_unfreed_id_count	Unfreed ID count; Unfreed "free IDs" count
 * @param [out]	out_failure_code		Failure code; Failure code
 * @return Returns UPIL_TRUE if the function succeeds, UPIL_FALSE if the
 * function fails.
 */
UPIL_LIBAPI upil_boolean UPIL_CALL dummy_library_get_unfreed_arguments (upil_integer32 *out_unfreed_size,
																		upil_integer32 *out_unfreed_id_count,
																		upil_integer32 *out_failure_code);

/** @} */
/* End of section: Library section */

/**
 * First section
 * This is a multiline comment.
 *	   This should be on the second line
 * See this enumeration: @ref DUMMY_AN_ENUMERATION_....
 *
 * @name First section
 * @{
 */

/* Beginning of section: First section */

/* Beginning of subsection: First subsection */

/**
 * The answer to THE question
 * You should read THE book to understand.
 * See this value: DUMMY_AN_ENUMERATION_ZERO.
 */
#define DUMMY_A_CONSTANT		42

/**
 * Max item count in the collection
 * Same as the total number of fingers we have:
 *	   - Left hand
 *	   - Right hand
 * See this constant: DUMMY_A_CONSTANT.
 */
#define DUMMY_COLLECTION_COUNT_MAX		10

/**
 * @name Details on an-enumeration
 * This is a short comment. doclink : @ref DUMMY_A_DUPLICATED_ENUMERATION_...
 * @anchor DUMMY_AN_ENUMERATION_
 */

/**
 * Zero
 * This is less than one.
 * Same as nothing...
 * doclink : dummy_library_initialize()
 */
#define DUMMY_AN_ENUMERATION_ZERO	10

/**
 * One
 * Is this a prime?
 * I'll never know...
 */
#define DUMMY_AN_ENUMERATION_ONE	11

/**
 * One plus one
 * Can you count?
 * I can!
 */
#define DUMMY_AN_ENUMERATION_TWO	12

/**
 * Three
 * Same as the number
 * of lines in
 * this comment
 */
#define DUMMY_AN_ENUMERATION_THREE	13


/**
 * @name A duplicated enumeration
 * You should not repeat yourself... See this keyword: UPIL_NULL
 * @anchor DUMMY_A_DUPLICATED_ENUMERATION_
 */

/**
 * Zero
 * This is less than one.
 * Same as nothing...
 * doclink : dummy_library_initialize()
 */
#define DUMMY_A_DUPLICATED_ENUMERATION_ZERO		10

/**
 * One
 * Is this a prime?
 * I'll never know...
 */
#define DUMMY_A_DUPLICATED_ENUMERATION_ONE		11

/**
 * One plus one
 * Can you count?
 * I can!
 */
#define DUMMY_A_DUPLICATED_ENUMERATION_TWO		12

/**
 * Three
 * Same as the number
 * of lines in
 * this comment
 */
#define DUMMY_A_DUPLICATED_ENUMERATION_THREE	13


/**
 * Record of primitives
 * This is the simplest record I could think of
 * Also see this one: dummy_image_record_t
 */
typedef struct
{
	/**
	 * The boolean
	 * See also: dummy_image_record_t::red
	 */
	upil_boolean the_boolean;

	/**
	 * The 32 bits integer
	 * We only deal with 32 bits values
	 * We don't need more
	 * See also: DUMMY_AN_ENUMERATION_THREE
	 */
	upil_integer32 the_integer32;

	/**
	 * The buffer
	 * For storing arbitrary binary data
	 */
	upil_buffer the_buffer;

} dummy_record_of_primitives_record_t;

/**
 * A bitmap image
 * Each plane is stored in its own buffer.
 * See also: dummy_record_of_primitives_record_t::the_buffer
 */
typedef struct
{
	/**
	 * The red plane
	 * Beware of the bull
	 */
	upil_buffer red;

	/**
	 * The green plane
	 * The color of a frog...
	 * ...ans?
	 */
	upil_buffer green;

	/**
	 * The blue plane
	 * The color of the sky
	 * in good weather conditions
	 */
	upil_buffer blue;

	/**
	 * The alpha plane
	 * Visible or invisible
	 * or anything in the middle
	 */
	upil_buffer alpha;

	/**
	 * The strange one
	 * A rather strange field in an image record...
	 */
	dummy_record_of_primitives_record_t strange;

} dummy_image_record_t;

/**
 * A collection of 32 bits integers
 * So many of them...
 * See also: dummy_image_record_t::green.
 */
typedef struct
{
	upil_integer32 count;
	upil_integer32 *items;

} dummy_collection_of_integer32_collection_t;

/**
 * A  collection of record of primitives
 * See: dummy_record_of_primitives_record_t.
 */
typedef struct
{
	upil_integer32 count;
	dummy_record_of_primitives_record_t *items;

} dummy_collection_of_record_of_primitives_collection_t;

/**
 * Record of non-primitive types
 * Not trivial
 */
typedef struct
{
	/**
	 * The collection of 32 bits integers
	 * This is too short comment
	 */
	dummy_collection_of_integer32_collection_t the_col;

	/**
	 * The record
	 * This is a short comment
	 */
	dummy_image_record_t the_record;

} dummy_record_of_non_primitives_record_t;

/**
 * Copy a boolean
 *
 * This is a multiline comment.
 *	 This should be on the second line
 * this should be on the third.
 *
 * @param		in_orig		The input boolean; This is a short comment. doclink : dummy_copy_boolean()
 * @param [out]	out_copy	The output boolean; This is a multiline comment.
 *							This should be on the second line
 *							this should be on the third.
 * @return UPIL_TRUE if success, UPIL_FALSE otherwise
 */
UPIL_LIBAPI upil_boolean UPIL_CALL dummy_copy_boolean (upil_boolean in_orig,
													   upil_boolean *out_copy);

/**
 * Copy a 32 bits integer
 *
 * This is a multiline comment.
 * This should be on the second line
 * this should be on the third.
 *
 * @param		in_orig		The input integer
 * @param [out]	out_copy	The output integer; This is a multiline comment.
 *							This should be on the second line
 *							this should be on the third.
 * @return UPIL_TRUE if success, UPIL_FALSE otherwise
 */
UPIL_LIBAPI upil_boolean UPIL_CALL dummy_copy_integer32 (upil_integer32 in_orig,
														 upil_integer32 *out_copy);

/**
 * Deeply copies a buffer
 *
 * This is a multiline comment.
 * This should be on the second line
 * this should be on the third.
 *
 * @param		in_orig			The input buffer
 * @param [out]	out_copy		The output buffer; This is a multiline comment.
 *								    - This should be on the second line
 *								this should be on the third.
 * @param [out]	out_free_id		output arguments free id
 * @return UPIL_TRUE if success, UPIL_FALSE otherwise
 */
UPIL_LIBAPI upil_boolean UPIL_CALL dummy_deepcopy_buffer (upil_buffer in_orig,
														  upil_buffer *out_copy,
														  upil_integer32 *out_free_id);

/**
 * Deeply copies a record of primitives
 *
 * This is a multiline comment.
 * This should be on the second line
 * this should be on the third.
 *
 * @param		in_orig			The input record of primitives; This is a short comment.
 * @param [out]	out_copy		The output record of primitives; This is a multiline comment.
 *								This should be on the second line
 *								this should be on the third.
 * @param [out]	out_free_id		output arguments free id
 * @return UPIL_TRUE if success, UPIL_FALSE otherwise
 */
UPIL_LIBAPI upil_boolean UPIL_CALL dummy_deepcopy_record_of_primitives (dummy_record_of_primitives_record_t *in_orig,
																		dummy_record_of_primitives_record_t *out_copy,
																		upil_integer32 *out_free_id);

/**
 * Deeply copies a collection of 32 bits integers
 *
 * This is a multiline comment.
 * This should be on the second line
 * this should be on the third.
 *
 * @param		in_orig			The input collection of integers; This is a short comment
 * @param [out]	out_copy		The output collection of integers; This is a multiline comment.
 *								This should be on the second line
 *								this should be on the third.
 * @param [out]	out_free_id		output arguments free id
 * @return UPIL_TRUE if success, UPIL_FALSE otherwise
 */
UPIL_LIBAPI upil_boolean UPIL_CALL dummy_deepcopy_collection_of_integer32 (dummy_collection_of_integer32_collection_t in_orig,
																		   dummy_collection_of_integer32_collection_t *out_copy,
																		   upil_integer32 *out_free_id);

/**
 * Deeply copies a collection of record of primitives
 *
 * This is a multiline comment.
 * This should be on the second line
 * this should be on the third.
 *
 * @param		in_orig			The input collection of record of primitives
 * @param [out]	out_copy		The output collection of record of primitives; This is a multiline comment.
 *								This should be on the second line
 *								this should be on the third.
 *								func argument doclink : out_copy
 * @param [out]	out_free_id		output arguments free id
 * @return UPIL_TRUE if success, UPIL_FALSE otherwise
 */
UPIL_LIBAPI upil_boolean UPIL_CALL dummy_deepcopy_collection_of_record_of_primitives (dummy_collection_of_record_of_primitives_collection_t in_orig,
																					  dummy_collection_of_record_of_primitives_collection_t *out_copy,
																					  upil_integer32 *out_free_id);

/**
 * Get a 320x480 image
 *
 * This is a multiline comment.
 * This should be on the second line
 * this should be on the third.
 *
 * @param [out]	out_image		The output image; This is a multiline comment.
 *								This should be on the second line
 *								this should be on the third.
 * @param [out]	out_free_id		output arguments free id
 * @return UPIL_TRUE if success, UPIL_FALSE otherwise
 */
UPIL_LIBAPI upil_boolean UPIL_CALL dummy_get_image_320x480 (dummy_image_record_t *out_image,
															upil_integer32 *out_free_id);

/* End of subsection: First subsection */

/* Beginning of subsection: Second subsection */

/**
 * Maximum heap size
 * The heap size should not go above this limit
 */
#define DUMMY_MAX_HEAP_SIZE		65536

/* End of subsection: Second subsection */

/** @} */
/* End of section: First section */


#ifdef __cplusplus
}
#endif

#endif	/* _dummy_h */

