import logging
logger = logging.getLogger()
logger.setLevel(logging.DEBUG)

def lambda_handler(event, context):
    logger.info("Event:")
    logger.info(event)
    
    return {
        "statusCode": 200
    }

if __name__ == "__main__":
    print(lambda_handler(None, None))