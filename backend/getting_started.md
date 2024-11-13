## Installation Steps

1). Create Virtual Environment in Python in backend directory

```node
cd backend
```

```python
python3 -m venv venv
```

2). Start Virtual Environment after creation (windows OS may differ)

```node
. venv/bin/activate
```

3). Install project dependencies from requirements.txt using PIP

```python
pip3 install -r services/starter/requirements.txt
```

4). Install pre-commit globally using Homebrew
```node
brew install pre-commit
```

5). See sample env's located a instance/sample.env_example and create new file called at instance/local.env

6). Set env variable for desired environment in terminal

```node
export ENV=LOCAL
```

> Note: You must start virtual environment and set current environment (local/prod in terminal)
        each time you close out of terminal session

7). Start flask app as module from root directory (/backend)

```python
python3 -m services.starter.app
```

8). Create new micro servicse as needed and follow steps above, replace starter/app with directory of new service
