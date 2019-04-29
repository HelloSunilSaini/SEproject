
from subprocess import Popen, PIPE
from difflib import SequenceMatcher

all_file_list = []

def return_all_file_list():
    global all_file_list
    return all_file_list

all_file_similarity_list = []

def return_all_file_similarity_list():
    global all_file_similarity_list
    return all_file_similarity_list
    
def find_similarity_percent(a, b):
    return SequenceMatcher(None, a, b).ratio()*100

def file_text(path):
    a = path.split('/')
    b = a[len(a) -1]
    c = b.split('.')
    ext = c[len(c) - 1]
    if ext == 'doc':
        return document_to_text(path)
    # elif ext == 'docx':
    #     return docx_to_text(path)
    else :
        return None
    
# def docx_to_text(path):
#     f = open(path, 'r')
#     return f.read()

def document_to_text(path):
    cmd = ['antiword', path]
    p = Popen(cmd, stdout=PIPE)
    stdout, stderr = p.communicate()
    if stderr != None :
        print (stderr)
        return stderr
    return stdout.decode('ascii', 'ignore')

def file_modification_date(path):
    cmd = ["sudo","date","-r",path,"+%s"]
    p = Popen(cmd, stdout=PIPE)
    stdout,stderr = p.communicate()
    if stderr != None :
        print (stderr)
        return stderr
    return stdout.decode('ascii', 'ignore')

def find_all_doc_files():
    cmd = ["find", "/","-name","*.doc"]
    p = Popen(cmd, stdout=PIPE)
    stdout,stderr = p.communicate()
    if stderr != None :
        print (stderr)
        return stderr
    return stdout.decode('ascii', 'ignore')

# def find_all_docx_files():
#     cmd = ["find", "/","-name","*.docx"]
#     p = Popen(cmd, stdout=PIPE)
#     stdout,stderr = p.communicate()
#     if stderr != None :
#         print (stderr)
#         return stderr
#     return stdout.decode('ascii', 'ignore')

def delete_file_by_path(path):
    cmd = ["rm",path]
    p = Popen(cmd, stdout=PIPE)
    stdout,stderr = p.communicate()
    if stderr != None :
        print (stderr)
        return stderr
    return stdout.decode('ascii', 'ignore')
    
def updateFilelists():
    print("updating file lists ...")
    k = find_all_doc_files()
    k =  k.split('\n')
    # print(k)
    # l = find_all_docx_files()
    # l = l.split('\n')
    # print(l)
    global all_file_list 
    all_file_list = k[:len(k)-1]
    print all_file_list
    n = len(all_file_list)
    all_file_text = []
    for i in range(n):
        all_file_text.append(document_to_text(all_file_list[i]))
        
    all_percent_list = []

    for i in range(n):
        for j in range(n):
            print(all_file_list[i],all_file_list[j])
            if (i<=j):
                continue
            else:
                similarity = find_similarity_percent(all_file_text[i],all_file_text[j])
                if similarity == 100:
                    date1 = file_modification_date(all_file_list[i])
                    date2 = file_modification_date(all_file_list[j])
                    if date1 > date2:
                        delete_file_by_path(all_file_list[j])
                    else:
                        delete_file_by_path(all_file_list[i])
                else:
                    all_percent_list.append({"file1" :all_file_list[i],"file2" : all_file_list[j],"similarity":similarity})
    global all_file_similarity_list
    all_percent_list.sort(cmp=None,key=lambda d : d['similarity'],reverse=True)
    all_file_similarity_list = all_percent_list[:]

def delete_list_of_files(filesList):
    for i in filesList:
        err = delete_file_by_path(i)
        if err != None:
            return err
    return None


