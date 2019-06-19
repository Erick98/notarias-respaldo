package com.palestra.notaria.bo;

import java.util.List;

import com.palestra.notaria.exceptions.NotariaException;
import com.palestra.notaria.modelo.DocumentoNotarialParcial;
import com.palestra.notaria.modelo.Escritura;

public interface DocumentoNotarialParcialBo extends GenericBo<DocumentoNotarialParcial>{
	
	DocumentoNotarialParcial getLastVersion(String id)throws NotariaException;
	
	Integer getActualVersion(String id) throws NotariaException;
	
	@Override
	public List<DocumentoNotarialParcial> findAll() throws NotariaException;

	List<DocumentoNotarialParcial> getByEscritura(Escritura escritura) throws NotariaException;
	
	@Override
	public DocumentoNotarialParcial findById(String id) throws NotariaException;

}
