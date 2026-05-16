import PyPDF2

with open('Radip_Shrestha_Resume.pdf', 'rb') as f:
    reader = PyPDF2.PdfReader(f)
    text = ""
    for page in reader.pages:
        text += page.extract_text() + "\n"

with open('resume.txt', 'w', encoding='utf-8') as f:
    f.write(text)
