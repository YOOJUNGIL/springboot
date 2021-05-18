package com.fintech.springboot.dao.service.customer;

import java.util.List;

import org.springframework.stereotype.Service;

import com.fintech.springboot.dao.dto.CustUser;
import com.fintech.springboot.dao.mybatis.mariadb.custuser.CustUserMapper;

@Service
public class CustUserService implements CustUserMapper {

	private CustUserMapper mapper;
	
	public List<CustUser> getCustUserList() {
		return mapper.getCustUserList();
	}
	
	public CustUser getCustUser(String userId) {
		return mapper.getCustUser(userId);
	}

	public int save(CustUser custUser) {
		return mapper.save(custUser);
	}

	public int modify(CustUser custUser) {
		return mapper.modify(custUser);
	}

	public int delete(String userId) {
		return mapper.delete(userId);
	}

}
