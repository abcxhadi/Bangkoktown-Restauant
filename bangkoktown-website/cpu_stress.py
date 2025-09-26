
import multiprocessing
import os
import time

def worker():
    """Function to consume CPU cycles."""
    while True:
        # This is a CPU-intensive task.
        _ = 123456789 ** 123456789

if __name__ == "__main__":
    # Get the number of CPU cores, leave one free for system stability.
    # You can change this number to increase or decrease the load.
    core_count = os.cpu_count()
    processes_to_start = max(1, core_count - 1) 
    
    print(f"Starting {processes_to_start} worker processes on {core_count} available cores.")
    print("This will cause high CPU usage. Press Ctrl+C to stop.")
    
    processes = []
    try:
        for i in range(processes_to_start):
            process = multiprocessing.Process(target=worker)
            process.start()
            processes.append(process)
        
        # Keep the main process alive until interruption
        while True:
            time.sleep(1)

    except KeyboardInterrupt:
        print("\nTerminating processes...")
        for process in processes:
            process.terminate()
            process.join()
        print("All processes terminated.")
