import winreg

def delete_registry_value(key_path, value_name):
    try:
        # 打开注册表键
        key = winreg.OpenKey(winreg.HKEY_CURRENT_USER, key_path, 0, winreg.KEY_SET_VALUE)
        winreg.DeleteValue(key, value_name)
        winreg.CloseKey(key)
        print(f"删除注册表值 '{value_name}' 成功。")
    except Exception as e:
        print(f"删除注册表值失败: {e}")

# 使用示例
delete_registry_value(r"Software\MyApp", "Version")
